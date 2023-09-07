import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@softarc/native-federation-runtime';
import { initWrapperConfig } from './wrapper-config';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { extractFragment } from './wrapper-helper';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);
  http = inject(HttpClient);

  @Input() config = initWrapperConfig;

  showPlaceholder = true;

  ngOnInit() {
    if (this.config.fragmentUrl) {
      this.loadFragment();
    }
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.75,
    };

    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting && this.showPlaceholder) {
        this.loadComponent();
        this.showPlaceholder = false;
      }
    }, options);

    io.observe(this.elm.nativeElement);
  }

  async loadComponent() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);
    this.elm.nativeElement.appendChild(root);
  }

  async loadFragment() {
    const {fragmentUrl, elementName } = this.config;

    const result = await lastValueFrom(this.http.get(fragmentUrl, { responseType: 'text' }));
    
    const html = extractFragment(result, elementName);
    const style = extractFragment(result, 'style');

    // Take care of XSS !!!
    this.elm.nativeElement.querySelector('#placeholder').innerHTML = `${style}\n${html}`;
  }

}
