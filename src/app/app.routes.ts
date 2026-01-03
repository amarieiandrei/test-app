import { Routes } from '@angular/router';
import { PaymentSuccessComponent } from './components/payment-success/payment-success';
import { TicketListComponent } from './components/ticket-list/ticket-list';
import { AddTicketFormComponent } from './components/add-ticket-form/add-ticket-form';

export const routes: Routes = [
    {
    path: 'bilete',
    component: TicketListComponent
  },
  {
    path: 'adauga-bilet',
    loadComponent: () => import('./components/add-ticket-form/add-ticket-form').then(m => m.AddTicketFormComponent)
  },
  {
    path: 'payment-success',
    loadComponent: () => import('./components/payment-success/payment-success').then(m => m.PaymentSuccessComponent)
  },
  {
        path: '**',
        redirectTo: 'bilete'
    }
];
