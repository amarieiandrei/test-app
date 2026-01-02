import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (!token) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.fetchToken(token);
  }

  fetchToken(token: string) {
    this.listingsService.validateToken(token).subscribe({
      next: (res: any) => {
        if (res?.valid) {
          // redirect către pagina de adăugare anunț
          this.router.navigate(['/add-listing'], {
            queryParams: { token }
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