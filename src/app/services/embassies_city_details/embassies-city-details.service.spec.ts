import { TestBed, inject } from '@angular/core/testing';

import { EmbassiesCityDetailsService } from './embassies-city-details.service';

describe('EmbassiesCityDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbassiesCityDetailsService]
    });
  });

  it('should be created', inject([EmbassiesCityDetailsService], (service: EmbassiesCityDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
