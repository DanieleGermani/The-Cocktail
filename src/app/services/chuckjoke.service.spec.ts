import { TestBed, inject } from '@angular/core/testing';

import { ChuckjokeService } from './chuckjoke.service';

describe('ChuckjokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckjokeService]
    });
  });

  it('should be created', inject([ChuckjokeService], (service: ChuckjokeService) => {
    expect(service).toBeTruthy();
  }));
});
