import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AiService {
  private API = 'http://localhost:5000/api/handwriting';

  constructor(private http: HttpClient) {}

  generateHandwriting(data: any) {
    return this.http.post<any>(`${this.API}/generate`, data);
  }

  getLatest() {
    return this.http.get<{ files: string[] }>(`${this.API}/latest`);
  }
  getUserCredits() {
  return this.http.get<{ credits: number }>(
    'http://localhost:5000/api/auth/me'
  );
}


}
