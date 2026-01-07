import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { AiService } from '../../services/ai.service';
import { SignupComponent } from '../../auth/signup/signup.component';

@Component({
  selector: 'app-preview',
  imports: [MatCardModule, MatButtonModule,CommonModule,FormsModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  files: string[] = [];

  constructor(private ai: AiService) {
    this.ai.getLatest().subscribe({
      next: r => this.files = r.files || [], 
      error: () => console.warn('No preview yet')
    });
  }

  download(url: string) {
    window.open(url, '_blank');
  }
}

