import { TestBed, inject } from '@angular/core/testing';

import { NationalityPriceService } from './nationality-price.service';

describe('NationalityPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationalityPriceService]
    });
  });

  it('should be created', inject([NationalityPriceService], (service: NationalityPriceService) => {
    expect(service).toBeTruthy();
  }));
});
