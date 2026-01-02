import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingListComponent } from './components/listing-list/listing-list';
import { AddListingFormComponent } from './components/add-listing-form/add-listing-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ListingListComponent, AddListingFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
