import { TestBed, inject } from '@angular/core/testing';

import { UpdateAddressService } from './update-address.service';

describe('UpdateAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateAddressService]
    });
  });

  it('should be created', inject([UpdateAddressService], (service: UpdateAddressService) => {
    expect(service).toBeTruthy();
  }));
});
