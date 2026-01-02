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

  // Validate token
  validateToken(token: string): Observable<{ valid: boolean }> {
    return this.http.get<{ valid: boolean }>(`${this.BASE_URL}?action=validateToken&token=${token}`);
  }

  // Get all listings
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.BASE_URL}?action=getListings`);
  }

  // Add a new listing using token
  addListing(listing: Listing, token: string): Observable<any> {
    const payload = { ...listing, token };
    return this.http.post(`${this.BASE_URL}`, payload);
  }
}