import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: string;
  contact: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all listings
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.BASE_URL);
  }

  // Add a new listing using token
  addListing(listing: Listing, token: string): Observable<any> {
    const payload = { ...listing, token };
    return this.http.post(`${this.BASE_URL}`, payload);
  }

  // Get latest token (from webhook)
  getLatestToken() {
    return this.http.get<{ token: string }>(`${this.BASE_URL}?action=getLatestToken`);
  }
  
  // getListings(): Observable<Listing[]> {
  //   return this.http.get<Listing[]>(this.BASE_URL);
  // }

  // addListing(listing: Listing) {
  //   const params = new URLSearchParams({
  //     id: listing.id,
  //     title: listing.title,
  //     description: listing.description,
  //     price: listing.price,
  //     contact: listing.contact,
  //     createdAt: listing.createdAt,
  //     secretCode: listing.secretCode || ''
  //   });

  //   return this.http.get(`${this.BASE_URL}?${params.toString()}`);
  // }
}