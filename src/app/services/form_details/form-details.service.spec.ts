import { TestBed, inject } from '@angular/core/testing';

import { FormDetailsService } from './form-details.service';

describe('FormDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDetailsService]
    });
  });

  it('should be created', inject([FormDetailsService], (service: FormDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
