import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  
   
  private api = `${environment.apiUrl}/api/payment`;

  constructor(private http: HttpClient) {}

  createOrder(pack: string) {
    return this.http.post<any>(`${this.api}/create-order`, { pack });
  }

  verifyPayment(data: any) {
    return this.http.post<any>(`${this.api}/verify`, data);
  }
}
