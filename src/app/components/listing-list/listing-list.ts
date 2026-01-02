import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListingCardComponent } from '../listing-card/listing-card';
import { HttpClientModule } from '@angular/common/http';
import { Listing, ListingsService } from '../../services/listings.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-listing-list',
  standalone: true,
  imports: [CommonModule, ListingCardComponent, HttpClientModule],
  template: `
    <div class="max-w-3xl mx-auto mt-6">
      <div class="text-center mb-6">
        <button (click)="goToStripe()"
          class="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Vinde bilet
        </button>
      </div>

      <app-listing-card *ngFor="let listing of listings" [listing]="listing"></app-listing-card>
    </div>
  `
})
export class ListingListComponent {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit() {
    this.fetchListings();
  }

  fetchListings() {
    this.listingsService.getListings().subscribe(data => {
      this.listings = data;
    });
  }

  goToStripe() {
    // redirect către Stripe Payment Link
    window.location.href = environment.stripePaymentLink;
  }
}