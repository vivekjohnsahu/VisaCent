import { TestBed, inject } from '@angular/core/testing';

import { FlagValueService } from './flag-value.service';

describe('FlagValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlagValueService]
    });
  });

  it('should be created', inject([FlagValueService], (service: FlagValueService) => {
    expect(service).toBeTruthy();
  }));
});
