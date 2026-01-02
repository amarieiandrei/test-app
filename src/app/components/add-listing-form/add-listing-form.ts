import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listing, ListingsService } from '../../services/listings.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';

// spartan ui components
// ButtonModule, InputModule, TextareaModule

@Component({
  selector: 'app-add-listing-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 class="text-xl font-bold mb-4">Add Listing</h2>
      <form (ngSubmit)="submit()">
        <input type="text" [(ngModel)]="title" name="title" placeholder="Title" required
               class="w-full p-2 mb-2 border rounded"/>
        <textarea [(ngModel)]="description" name="description" placeholder="Description" required
                  class="w-full p-2 mb-2 border rounded"></textarea>
        <input type="text" [(ngModel)]="price" name="price" placeholder="Price"
               class="w-full p-2 mb-2 border rounded"/>
        <input type="text" [(ngModel)]="contact" name="contact" placeholder="Contact (email/phone)" required
               class="w-full p-2 mb-2 border rounded"/>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  `
})
export class AddListingFormComponent {
  title = '';
  description = '';
  price = '';
  contact = '';
  token: string | null = null;

  constructor(private listingsService: ListingsService, private route: ActivatedRoute) {
    // get token from query params
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  submit() {
    if (!this.token) {
      alert('Token invalid or missing. Please pay first.');
      return;
    }

    const newListing: Listing = {
      id: uuidv4(),
      title: this.title,
      description: this.description,
      price: this.price,
      contact: this.contact,
      createdAt: new Date().toISOString(),
    };

    this.listingsService.addListing(newListing, this.token).subscribe({
      next: () => {
        alert('Listing added successfully!');
        this.title = this.description = this.price = this.contact = '';
      },
      error: (err) => {
        console.error(err);
        alert('Error adding listing. Token may be invalid.');
      }
    });
  }
}