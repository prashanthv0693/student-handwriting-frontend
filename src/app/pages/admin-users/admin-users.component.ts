import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit {
  users: any[] = [];
  creditValues: { [key: string]: number } = {};

  constructor(private admin: AdminService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.admin.getUsers().subscribe(res => this.users = res);
  }

  addCredits(id: string) {
  const value = this.creditValues[id] || 0;
  this.admin.updateCredits(
    id,
    value,
    'Admin added credits'
  ).subscribe(() => this.loadUsers());
}

deductCredits(id: string) {
  const value = this.creditValues[id] || 0;
  this.admin.updateCredits(
    id,
    -value,
    'Admin deducted credits'
  ).subscribe(() => this.loadUsers());
}

}
