import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone, ɵNoopNgZone } from '@angular/core';

(async () => {
  const app = await createApplication({
    providers: [
      /* your global providers here */
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
    ],
  });

  const mfe2Root = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe2-root', mfe2Root);
})();
