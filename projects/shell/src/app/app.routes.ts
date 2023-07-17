import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'flights',
    loadChildren: () => import('mfe1/Module')
      .then((m) => m.FlightsModule)
    
  },

  {
    path: 'flights2',
    loadChildren: () => loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  }


  // We remove this, b/c the target here is still module federation
  // {
  //   path: 'react',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry:
  //       'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
  //     remoteName: 'react',
  //     exposedModule: './web-components',
  //     elementName: 'react-element',
  //   } as WebComponentWrapperOptions,
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
