import { Component, OnInit } from '@angular/core';
import { CreditService } from '../../services/credit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-history',
  imports: [CommonModule],
  templateUrl: './credit-history.component.html',
  styleUrl: './credit-history.component.scss'
})
export class CreditHistoryComponent implements OnInit {

  history: any[] = [];

  constructor(private credit: CreditService) {}

  ngOnInit() {
    this.credit.getHistory().subscribe({
      next: res => this.history = res
    });
  }
}