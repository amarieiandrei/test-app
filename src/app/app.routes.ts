import { Routes } from '@angular/router';
import { PaymentSuccessComponent } from './components/payment-success/payment-success';
import { ListingListComponent } from './components/listing-list/listing-list';
import { AddListingFormComponent } from './components/add-listing-form/add-listing-form';

export const routes: Routes = [
    {
    path: '',
    component: ListingListComponent
  },
  {
    path: 'add-listing',
    loadComponent: () => import('./components/add-listing-form/add-listing-form').then(m => m.AddListingFormComponent)
  },
  {
    path: 'payment-success',
    loadComponent: () => import('./components/payment-success/payment-success').then(m => m.PaymentSuccessComponent)
  }
];
