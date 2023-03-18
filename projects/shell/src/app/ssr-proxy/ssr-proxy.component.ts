import { loadRemoteModule } from '@angular-architects/module-federation';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EnvironmentInjector,
  inject,
  Injector,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ManifestLoader } from '../manifest';
import { isServer } from '../utils';

export interface SsrProxyOptions {
  remote: string;
  url: string;
  tag: string;

  lazy?: boolean;

  client?: {
    exposedModule: string;
    export?: string;
    type?: 'Angular' | 'CustomElement';
  };
}

@Component({
  selector: 'app-ssr-proxy',
  templateUrl: './ssr-proxy.component.html',
  styleUrls: ['./ssr-proxy.component.css'],
})
export class SsrProxyComponent implements OnInit {
  route = inject(ActivatedRoute);
  loader = inject(ManifestLoader);
  http = inject(HttpClient);
  elm = inject(ElementRef);
  envInjector = inject(EnvironmentInjector);
  injector = inject(Injector);
  viewContainer = inject(ViewContainerRef);
  isServer = isServer();
  loaded = false;

  @Input() options: SsrProxyOptions;

  ngOnInit(): void {
    const data = this.options ? of(this.options) : this.route.data;

    data.subscribe((data: SsrProxyOptions) => {
      if (this.isServer && !data.lazy) {
        this.loadContent(data);
      } else if (!this.isServer && data.client) {
        this.loadClientContent(data);
      }
    });
  }

  private loadClientContent(data: SsrProxyOptions) {
    if (!data.lazy) {
      this.loadComponent(data);
      return;
    }
    this.initIntersectionObserver(data);
  }

  private initIntersectionObserver(data: SsrProxyOptions) {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    };

    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting && !this.loaded) {
        this.loadComponent(data);
      }
    }, options);

    io.observe(this.elm.nativeElement.querySelector('#content'));
  }

  loadComponent(data: SsrProxyOptions): void {
    if (!data.client) {
      throw new Error('SsrProxyOptions: client config expected!');
    }

    loadRemoteModule(data.remote, data.client.exposedModule)
      .then((m) => {
        this.addComponent(data, m);
      })
      .catch((err) => {
        console.error('error', err);
      });
  }

  private addComponent(data: SsrProxyOptions, m: any) {
    if (data.client.type === 'CustomElement') {
      this.addCustomElement(data);
    } else {
      this.addAngularComponent(m, data);
    }
    this.loaded = true;
  }

  private addCustomElement(data: SsrProxyOptions) {
    const native = this.elm.nativeElement as Element;
    native.appendChild(document.createElement(data.tag));
  }

  private addAngularComponent(m: any, data: SsrProxyOptions) {
    const Comp = m[data.client.export] as Type<unknown>;

    this.viewContainer.createComponent(Comp, {
      environmentInjector: this.envInjector,
      injector: this.injector,
    });
  }

  loadContent(data: SsrProxyOptions) {
    this.loader.get().subscribe((manifest) => {
      const entry = manifest[data.remote];
      const baseUrl = entry.substring(0, entry.lastIndexOf('/'));
      const url = baseUrl + '/' + data.url;

      this.http.get(url, { responseType: 'text' }).subscribe((resp) => {
        let html = this.extractMarkup(resp, data.tag);
        const jsonIsland = this.extractMarkup(resp, 'script', 'mfe1-state');
        this.elm.nativeElement.innerHTML = html + jsonIsland;
      });
    });
  }

  private extractMarkup(resp: string, tagName: string, id = '') {
    const startTag = id ? `<${tagName} id="${id}"` : `<${tagName}`;
    const start = resp.indexOf(startTag);
    const end = resp.indexOf('</' + tagName + '>', start);

    if (start === -1 || end === -1) {
      return '';
    }

    let html = resp.substring(start, end + tagName.length + 3);
    // html = html.replace(/_ngcontent-.*?=""/g, '');
    return html;
  }
}
