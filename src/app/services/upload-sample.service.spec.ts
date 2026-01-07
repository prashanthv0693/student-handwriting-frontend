import { TestBed } from '@angular/core/testing';

import { UploadSampleService } from './upload-sample.service';

describe('UploadSampleService', () => {
  let service: UploadSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
