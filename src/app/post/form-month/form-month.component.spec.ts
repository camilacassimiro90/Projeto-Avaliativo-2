import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMonthComponent } from './form-month.component';

describe('FormMonthComponent', () => {
  let component: FormMonthComponent;
  let fixture: ComponentFixture<FormMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
