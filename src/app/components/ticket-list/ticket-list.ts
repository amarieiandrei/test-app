import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TicketCardComponent } from '../ticket-card/ticket-card';
import { HttpClientModule } from '@angular/common/http';
import {  TicketsService, Ticket } from '../../services/tickets.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, TicketCardComponent, HttpClientModule],
  templateUrl: './ticket-list.html'
})
export class TicketListComponent {
  tickets: Ticket[] = [];

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.fetchTickets();
  }

  fetchTickets() {
    this.ticketsService.getTickets().subscribe(data => {
      this.tickets = data;
    });
  }

  goToStripe() {
    // redirect către Stripe Payment Link
    window.location.href = environment.stripePaymentLinkTest;
  }
}