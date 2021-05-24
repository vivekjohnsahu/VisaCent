import { TestBed, inject } from '@angular/core/testing';

import { MyprofileService } from './myprofile.service';

describe('MyprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyprofileService]
    });
  });

  it('should be created', inject([MyprofileService], (service: MyprofileService) => {
    expect(service).toBeTruthy();
  }));
});
