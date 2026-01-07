import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-transactions',
  imports: [CommonModule],
  templateUrl: './admin-transactions.component.html',
  styleUrl: './admin-transactions.component.scss'
})
export class AdminTransactionsComponent implements OnInit {

  transactions: any[] = [];

  constructor(private admin: AdminService) {}

  ngOnInit() {
    this.admin.getTransactions()
      .subscribe(res => this.transactions = res);
  }
}
