import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-success.html',
})
export class PaymentSuccessComponent {
  loading = true;
  error = false;

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const sessionId = this.route.snapshot.queryParamMap.get('sessionId');

    if (!sessionId) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.fetchToken(sessionId);
  }

  fetchToken(sessionId: string) {
    this.ticketsService.getTokenBySession(sessionId).subscribe({
      next: (res: any) => {
        if (res?.valid && res?.token) {
          // redirect către pagina de adăugare anunț
          this.router.navigate(['/adauga-bilet'], {
            queryParams: { token: res.token }
          });
        } else {
          this.error = true;
        }
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}