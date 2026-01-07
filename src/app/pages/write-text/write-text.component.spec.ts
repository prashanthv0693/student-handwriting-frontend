import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTextComponent } from './write-text.component';

describe('WriteTextComponent', () => {
  let component: WriteTextComponent;
  let fixture: ComponentFixture<WriteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
