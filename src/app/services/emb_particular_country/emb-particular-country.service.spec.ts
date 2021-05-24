import { TestBed, inject } from '@angular/core/testing';

import { EmbParticularCountryService } from './emb-particular-country.service';

describe('EmbParticularCountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbParticularCountryService]
    });
  });

  it('should be created', inject([EmbParticularCountryService], (service: EmbParticularCountryService) => {
    expect(service).toBeTruthy();
  }));
});
