import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environment.prod';

@Injectable({ providedIn: 'root' })
export class UploadSampleService {
 
    private api = `${environment.apiUrl}/api/handwriting/upload-sample`;
    

  constructor(private http: HttpClient) {}

  uploadSamples(formData: FormData) {
    return this.http.post(this.api, formData);
  }
}