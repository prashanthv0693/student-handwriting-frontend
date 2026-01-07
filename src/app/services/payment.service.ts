import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  API = 'http://localhost:5000/api/payment';

  constructor(private http: HttpClient) {}

 
  createOrder(pack: string) {
   return this.http.post<any>(`${this.API}/create-order`, { pack });
  }

  verifyPayment(data: any) {
    return this.http.post<any>(`${this.API}/verify`, data);
  }
}
