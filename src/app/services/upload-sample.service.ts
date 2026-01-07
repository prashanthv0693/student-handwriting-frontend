import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class UploadSampleService {
 
  private API = 'http://localhost:5000/api/handwriting/upload-sample';

  constructor(private http: HttpClient) {}

  uploadSamples(formData: FormData) {
    return this.http.post(this.API, formData);
  }
}
