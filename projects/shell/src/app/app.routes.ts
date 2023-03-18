import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  startsWith
} from '@angular-architects/module-federation-tools';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IslandComponent } from './island/island.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SsrProxyComponent, SsrProxyOptions } from './ssr-proxy/ssr-proxy.component';
import { isBrowser, isServer } from './utils';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },


  {
    path: 'flights',
    canMatch: [isBrowser],
    loadChildren: () =>
      loadRemoteModule('mfe1', './Module').then((m) => m.FlightsModule),
  },
  {
    matcher: startsWith('flights'),
    canMatch: [isServer],
    component: SsrProxyComponent,
    data: {
      remote: 'mfe1',
      url: 'flights-search',
      tag: 'app-flights-search'
    } as SsrProxyOptions
  },
  {
    path: 'island',
    component: IslandComponent
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
