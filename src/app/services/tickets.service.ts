import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Ticket {
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
export class TicketsService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get token by session ID
  getTokenBySession(sessionId: string) {
    return this.http.get<{ valid: boolean, token: string }>(`${this.BASE_URL}?action=getTokenBySession&sessionId=${sessionId}`);
  }

  // Get all tickets
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.BASE_URL}?action=getTickets`);
  }

  // Add a new ticket using token
  addTicket(ticket: Ticket, token: string): Observable<any> {
    const payload = { ...ticket, token };
    return this.http.post(`${this.BASE_URL}`, payload);
  }
}