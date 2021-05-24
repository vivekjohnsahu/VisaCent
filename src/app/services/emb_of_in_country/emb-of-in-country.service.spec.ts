import { TestBed, inject } from '@angular/core/testing';

import { EmbOfInCountryService } from './emb-of-in-country.service';

describe('EmbOfInCountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbOfInCountryService]
    });
  });

  it('should be created', inject([EmbOfInCountryService], (service: EmbOfInCountryService) => {
    expect(service).toBeTruthy();
  }));
});
