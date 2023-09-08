import { APP_ID, ApplicationConfig, NgZone } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
    { provide: APP_ID, useValue: 'mfe2' },
    provideClientHydration()
  ],
};
