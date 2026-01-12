import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environment.prod';


@Injectable({ providedIn: 'root' })
export class AuthService {

 private api = `${environment.apiUrl}/api/auth`;
  

  credits$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('credits') || 0)
  );

  constructor(private http: HttpClient, private router: Router) {}

  signup(data: any) {
    return this.http.post(`${this.api}/signup`, data);
  }

  login(data: any) {
    return this.http.post<any>(`${this.api}/login`, data);
  }

  saveLogin(token: string, credits: number, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('credits', credits.toString());
    localStorage.setItem('role', role);
    this.credits$.next(credits);
  }

  setCredits(value: number) {
    localStorage.setItem('credits', value.toString());
    this.credits$.next(value);
  }

  getCredits() {
    return this.credits$.value;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Date.now() / 1000;

      if (payload.exp < now) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      this.logout();
      return false;
    }
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role === 'ADMIN'; 
  }

  logout() {
    localStorage.clear();
    this.credits$.next(0);
    this.router.navigate(['/login']);
  }
}
