import {
  Component,
  ElementRef,
  Input,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@softarc/native-federation-runtime';
import { initWrapperConfig } from './wrapper-config';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { extractFragment } from './wrapper-helper';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  // host: { ngSkipHydration: 'true' },
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);
  http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);

  @Input() config = initWrapperConfig;

  showPlaceholder = true;

  ngOnInit() {
    if (isPlatformServer(this.platformId) && this.config.fragmentUrl) {
       this.loadFragment();
    } else if (isPlatformBrowser(this.platformId)) {
      this.loadComponent();
      // this.initIntersectionObserver();
    }
  }

  private initIntersectionObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.75,
    };

    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting && this.showPlaceholder) {
        this.loadComponent();
      }
    }, options);

    io.observe(this.elm.nativeElement.querySelector('#placeholder'));
  }

  async loadComponent() {
    const { exposedModule, remoteName, elementName } = this.config;
    await loadRemoteModule(remoteName, exposedModule);
    const elm = this.elm.nativeElement as HTMLElement;
    if (this.elm.nativeElement.querySelector('#placeholder').children.length === 0) {
      const root = document.createElement(elementName);
      this.elm.nativeElement.appendChild(root);
    }
    this.showPlaceholder = false;
  }

  async loadFragment() {
    const { fragmentUrl, elementName, remoteName } = this.config;
    const result = await lastValueFrom(
      this.http.get(fragmentUrl, { responseType: 'text' })
    );

    const rawHtml = extractFragment(result, elementName);
    const style = extractFragment(result, 'style', 'ng-app-id', remoteName);
    const script = extractFragment(
      result,
      'script',
      'id',
      `${remoteName}-state`
    );

    const html = rawHtml;

    // Take care of XSS !!!
    this.elm.nativeElement.querySelector('#placeholder').innerHTML = `${style}\n${script}\n${html}`;
  }
}
