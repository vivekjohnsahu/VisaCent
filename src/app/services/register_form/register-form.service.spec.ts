import { TestBed, inject } from '@angular/core/testing';

import { RegisterFormService } from './register-form.service';

describe('RegisterFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterFormService]
    });
  });

  it('should be created', inject([RegisterFormService], (service: RegisterFormService) => {
    expect(service).toBeTruthy();
  }));
});
