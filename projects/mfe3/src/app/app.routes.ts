import { Routes } from '@angular/router';

// Add this import:
import { YourFlightsComponent } from './your-flights/your-flights.component';
import { YourProfileComponent } from './your-profile/your-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: 'profile',
    redirectTo: 'profile/your-flights',
    pathMatch: 'full',
  },

  // Add this route:
  {
    path: 'profile/your-flights',
    component: YourFlightsComponent,
  },

  {
    path: 'profile/your-profile',
    component: YourProfileComponent
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

];
