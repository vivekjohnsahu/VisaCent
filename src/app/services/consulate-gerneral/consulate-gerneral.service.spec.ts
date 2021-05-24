import { TestBed, inject } from '@angular/core/testing';

import { ConsulateGerneralService } from './consulate-gerneral.service';

describe('ConsulateGerneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsulateGerneralService]
    });
  });

  it('should be created', inject([ConsulateGerneralService], (service: ConsulateGerneralService) => {
    expect(service).toBeTruthy();
  }));
});
