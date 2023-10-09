import { Routes } from "@angular/router";
import { FlightComponent } from "./flight/flight.component";
import { HolidayPackagesComponent } from "./holiday-packages/holiday-packages.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'flights',
        pathMatch: 'full'
    },
    {
        path: 'flight-search',
        component: FlightComponent
    },
    {
        path: 'holiday-packages',
        component: HolidayPackagesComponent
    }
];
