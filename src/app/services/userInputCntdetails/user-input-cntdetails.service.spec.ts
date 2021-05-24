import { TestBed, inject } from '@angular/core/testing';

import { UserInputCntdetailsService } from './user-input-cntdetails.service';

describe('UserInputCntdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInputCntdetailsService]
    });
  });

  it('should be created', inject([UserInputCntdetailsService], (service: UserInputCntdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
