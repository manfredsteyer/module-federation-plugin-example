import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    // Your route here:

    {
      path: 'flights',
      loadChildren: () => /* import(...) */ {
        return loadRemoteModule({
          remoteEntry: URL,
          remoteName: 'mfe1',
          exposedModule: './Module'
        })
        .then(m => m.FlightsModule) }
    },

    {
      path: 'react',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'  
      } as WebComponentWrapperOptions
    },   
    
    {
      path: 'angular1',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular1',
        exposedModule: './web-components',
        elementName: 'angular1-element'
      } as WebComponentWrapperOptions
    },    

    {
      path: 'angular2',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
        remoteName: 'angular2',
        exposedModule: './web-components',
        elementName: 'angular2-element'
      } as WebComponentWrapperOptions
    },    

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

