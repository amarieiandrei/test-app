import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Listing } from '../../services/listings.service';

// spartan ui components
// CardModule

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 bg-white shadow-md rounded-md mb-4">
      <h3 class="text-lg font-bold mb-1">{{ listing.title }}</h3>
      <p class="text-gray-600 mb-1">{{ listing.description }}</p>
      <p class="font-semibold mb-1">Price: {{ listing.price }}</p>
      <p class="text-blue-500 mb-1">Contact: {{ listing.contact }}</p>
      <p class="text-gray-400 text-sm">Posted at: {{ listing.createdAt | date:'short' }}</p>
    </div>
  `
})
export class ListingCardComponent {
  @Input() listing!: Listing;
}