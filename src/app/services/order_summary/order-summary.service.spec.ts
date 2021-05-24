import { TestBed, inject } from '@angular/core/testing';

import { OrderSummaryService } from './order-summary.service';

describe('OrderSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderSummaryService]
    });
  });

  it('should be created', inject([OrderSummaryService], (service: OrderSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
