import { TestBed, inject } from '@angular/core/testing';

import { VisaApplicationService } from './visa-application.service';

describe('VisaApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaApplicationService]
    });
  });

  it('should be created', inject([VisaApplicationService], (service: VisaApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
