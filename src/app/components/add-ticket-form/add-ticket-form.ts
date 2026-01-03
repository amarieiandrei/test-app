import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket, TicketsService } from '../../services/tickets.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-ticket-form.html'
})
export class AddTicketFormComponent {
  title = '';
  description = '';
  price = '';
  contact = '';
  token: string | null = null;

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute) {
    // get token from query params
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  submit() {
    if (!this.token) {
      alert('Token invalid or missing. Please pay first.');
      return;
    }

    const newTicket: Ticket = {
      id: uuidv4(),
      title: this.title,
      description: this.description,
      price: this.price,
      contact: this.contact,
      createdAt: new Date().toISOString(),
    };

    this.ticketsService.addTicket(newTicket, this.token).subscribe({
      next: () => {
        alert('Ticket added successfully!');
        this.title = this.description = this.price = this.contact = '';
      },
      error: (err) => {
        console.error(err);
        alert('Error adding ticket. Token may be invalid.');
      }
    });
  }
}