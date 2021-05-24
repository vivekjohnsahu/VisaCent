import { TestBed, inject } from '@angular/core/testing';

import { PaymentGateService } from './payment-gate.service';

describe('PaymentGateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentGateService]
    });
  });

  it('should be created', inject([PaymentGateService], (service: PaymentGateService) => {
    expect(service).toBeTruthy();
  }));
});
