import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

    private api = `${environment.apiUrl}/api/credits`;

  constructor(private http: HttpClient) {}

  getHistory() {
    return this.http.get<any[]>(`${this.api}/history`);
  }

  buyCredits(pack: string) {
    return this.http.post<any>(`${this.api}/buy`, { pack });
  }
}
 