import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../../services/listings.service';
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
    private listingsService: ListingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchToken();
  }

  fetchToken() {
    this.listingsService.getLatestToken().subscribe({
      next: (res: any) => {
        if (res?.token) {
          // redirect către pagina de adăugare anunț
          this.router.navigate(['/add-listing'], {
            queryParams: { token: res.token }
          });
        } else {
          this.error = true;
          this.loading = false;
        }
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}