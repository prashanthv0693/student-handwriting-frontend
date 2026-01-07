import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private API = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(`${this.API}/users`);
  }

  updateCredits(userId: string, credits: number, reason: string) {
  return this.http.post(`${this.API}/credits`, {
    userId,
    credits,
    reason
    });
  }

  getTransactions() {
    return this.http.get<any[]>(`${this.API}/transactions`);
  }
}
