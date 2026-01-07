import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { UploadSampleService } from '../../services/upload-sample.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-sample',
  imports: [MatCardModule,FormsModule,CommonModule,ReactiveFormsModule,MatIconModule],
  templateUrl: './upload-sample.component.html',
  styleUrl: './upload-sample.component.scss'
})
export class UploadSampleComponent {
    selectedFile: File | null = null;
  uploaded = false;
  loading = false;

  constructor(private uploadService: UploadSampleService) {}

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) {
      alert('Please select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('sample', this.selectedFile);

    this.loading = true;

    this.uploadService.uploadSamples(formData).subscribe({
      next: (res) => {
        console.log('Upload response:', res);
        this.uploaded = true;
        this.loading = false;
        alert('Uploaded successfully!');
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        alert('Upload failed!');
      }
    });
  }
}