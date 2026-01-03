import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ticket } from '../../services/tickets.service';


@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-card.html'
})
export class TicketCardComponent {
  @Input() ticket!: Ticket;
}