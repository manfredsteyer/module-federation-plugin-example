import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

(async () => {
  const app = await createApplication({
    providers: [
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
      provideRouter(APP_ROUTES),
    ],
  });

  const mfe3Root = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe3-root', mfe3Root);
})();
