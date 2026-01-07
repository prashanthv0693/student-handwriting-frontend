import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

   API = 'http://localhost:5000/api/credits';

  constructor(private http: HttpClient) {}

  getHistory() {
    return this.http.get<any[]>(`${this.API}/history`);
  }
  buyCredits(pack: string) {
  return this.http.post<any>(
    `${this.API}/buy`,
    { pack }
  );
}
}
