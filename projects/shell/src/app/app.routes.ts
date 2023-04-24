import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:

    {
      path: 'flights',
      loadChildren: () =>
      loadRemoteModule({
         type: 'module',
         remoteEntry: 'http://localhost:4201/flightsBundle.js',
         exposedModule: './flights.module'
     })
     .then(m => m.FlightsModule)
    },
    {
      path: 'bus',
     loadChildren: () =>
      loadRemoteModule({
         type: 'module',
         remoteEntry: 'http://localhost:4202/busBundle.js',
         exposedModule: './bus.module'
     })
     .then(m => m.BusModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

