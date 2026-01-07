import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,CommonModule, RouterModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout() {
  this.auth.logout(); // clears token and credits
  this.router.navigate(['/login']); 
}
}
