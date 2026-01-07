import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { AiService } from '../../services/ai.service';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-write-text',
  imports: [MatCardModule, MatInputModule,FormsModule,CommonModule, MatSelectModule, MatOptionModule],
  templateUrl: './write-text.component.html',
  styleUrl: './write-text.component.scss'
})
export class WriteTextComponent implements OnInit {
  text = '';
  loading = false;

  options = {
    penColor: 'blue',
    background: 'ruled',
    pages: 1
  };

  credits = 0; // user credits

  constructor(private ai: AiService) {}

  ngOnInit() {
    this.fetchCredits();
  }

  fetchCredits() {
    this.ai.getUserCredits().subscribe({
      next: (res: any) => this.credits = res.credits,
      error: () => this.credits = 0
    });
  }

  quickSample() {
    this.text = 'This is sample answer for practice. Write clean handwriting.';
  }

  generate() {
    if (!this.text.trim()) {
      alert('Please enter text');
      return;
    }

    const requiredCredits = this.options.pages; // 1 page = 1 credit
    if (this.credits < requiredCredits) {
      alert(
`Not enough credits!
Required: ${requiredCredits} credits
Cost: ₹${requiredCredits * 2}`
      );
      return;
    }

    this.loading = true;

    this.ai.generateHandwriting({
      text: this.text,
      options: this.options
    }).subscribe({
      next: (resp: any) => {
        this.loading = false;

        // Update credits
        this.credits = resp.remainingCredits;

        alert(
`Generated ${resp.pages} page(s)
Cost: ₹${resp.costInRupees}
Credits left: ${resp.remainingCredits}`
        );

        // If server returned PDF or images
        if (resp.pdfUrl) window.open(resp.pdfUrl, '_blank');
      },

      error: (err) => {
        this.loading = false;

        if (err.status === 402) {
          alert(
`Not enough credits!
Required: ${err.error.requiredCredits} credits
Cost: ₹${err.error.costInRupees}`
          );
        } else {
          alert('Generation failed. Try again.');
        }
      }
    });
  }
}