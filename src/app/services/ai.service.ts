import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment.prod';

@Injectable({ providedIn: 'root' })
export class AiService {
    private api = `${environment.apiUrl}/api/handwriting`;

  constructor(private http: HttpClient) {}

  generateHandwriting(data: any) {
    return this.http.post<any>(`${this.api}/generate`, data);
  }

  getLatest() {
    return this.http.get<{ files: string[] }>(`${this.api}/latest`);
  }

  getUserCredits() {
    return this.http.get<{ credits: number }>(
      // `${environment.apiUrl}/api/auth/me`
      `${environment.apiUrl}/api/auth`
    );
  }
}

