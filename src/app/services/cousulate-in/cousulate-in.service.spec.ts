import { TestBed, inject } from '@angular/core/testing';

import { CousulateInService } from './cousulate-in.service';

describe('CousulateInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CousulateInService]
    });
  });

  it('should be created', inject([CousulateInService], (service: CousulateInService) => {
    expect(service).toBeTruthy();
  }));
});
