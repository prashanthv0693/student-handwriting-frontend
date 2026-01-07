import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSampleComponent } from './upload-sample.component';

describe('UploadSampleComponent', () => {
  let component: UploadSampleComponent;
  let fixture: ComponentFixture<UploadSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
