import { Routes } from '@angular/router';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';
import { YourFlightsComponent } from './your-flights/your-flights.component';
import { YourProfileComponent } from './your-profile/your-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'mfe3/your-flights',
    pathMatch: 'full',
  },

  // Add this route:
  {
    path: 'mfe3/your-flights',
    component: YourFlightsComponent,
  },

  {
    path: 'mfe3/your-profile',
    component: YourProfileComponent
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

];
