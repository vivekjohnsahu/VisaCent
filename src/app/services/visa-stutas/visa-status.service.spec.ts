import { TestBed, inject } from '@angular/core/testing';

import { VisaStatusService } from './visa-status.service';

describe('VisaStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaStatusService]
    });
  });

  it('should be created', inject([VisaStatusService], (service: VisaStatusService) => {
    expect(service).toBeTruthy();
  }));
});
