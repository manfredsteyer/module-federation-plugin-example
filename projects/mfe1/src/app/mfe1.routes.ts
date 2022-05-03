import { Routes } from '@angular/router';
import { FlightSearchComponent } from './booking/flight-search/flight-search.component';
import { PassengerSearchComponent } from './booking/passenger-search/passenger-search.component';
import { HomeComponent } from './home/home.component';

export const MFE1_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
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
