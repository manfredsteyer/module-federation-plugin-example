import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'booking', 
        loadChildren: () => 
            import('./booking/booking.routes').then(m => m.BOOKING_ROUTES)
    },
    {
        path: 'my-ticket',
        loadComponent: () => 
            import('./my-tickets/my-tickets.component').then(m => m.MyTicketsComponent)

    }
];
