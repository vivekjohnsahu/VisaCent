import { TestBed, inject } from '@angular/core/testing';

import { EmbassiesCounrtiesListService } from './embassies-counrties-list.service';

describe('EmbassiesCounrtiesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbassiesCounrtiesListService]
    });
  });

  it('should be created', inject([EmbassiesCounrtiesListService], (service: EmbassiesCounrtiesListService) => {
    expect(service).toBeTruthy();
  }));
});
