import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

export const BOOKING_ROUTES: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'flight-search'
    },
    {
      path: 'flight-search',
      component: FlightSearchComponent
    },
    {
      path: 'passenger-search',
      component: PassengerSearchComponent
    }
];
