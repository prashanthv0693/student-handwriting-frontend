import { Component } from '@angular/core';
import { CreditService } from '../../services/credit.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../services/payment.service';
declare var Razorpay: any;

@Component({
  selector: 'app-buy-credits',
  imports: [CommonModule],
  templateUrl: './buy-credits.component.html',
  styleUrl: './buy-credits.component.scss'
})
export class BuyCreditsComponent {

  loading = false;

  constructor(
    private credit: CreditService,
    private auth: AuthService,
    private payment: PaymentService
  ) {}

  payNow(pack: string) {
    this.loading = true;

    this.payment.createOrder(pack).subscribe({
      next: (order: any) => {
        this.loading = false;

        const options = {
          key: order.key, 
          amount: order.amount,
          currency: 'INR',
          name: 'Handwriting App',
          description: 'Buy Credits',
          order_id: order.orderId, 

          handler: (response: any) => {
            this.payment.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              pack: pack
            }).subscribe({
              next: (res: any) => {
               
                this.auth.setCredits(res.totalCredits);
                alert('Payment Success ');
              },
              error: () => {
                alert('Verification Failed ');
              }
            });
          },

          theme: {
            color: '#4f46e5'
          }
        };

        const rzp = new Razorpay(options);
        rzp.open();
      },

      error: () => {
        this.loading = false;
        alert('Order creation failed');
      }
    });
  }
}