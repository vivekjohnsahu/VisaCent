import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGuidelinesComponent } from './payment-guidelines.component';

describe('PaymentGuidelinesComponent', () => {
  let component: PaymentGuidelinesComponent;
  let fixture: ComponentFixture<PaymentGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
