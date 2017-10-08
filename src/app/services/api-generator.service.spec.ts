import { TestBed, inject } from '@angular/core/testing';

import { ApiGeneratorService } from './api-generator.service';

describe('ApiGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGeneratorService]
    });
  });

  it('should be created', inject([ApiGeneratorService], (service: ApiGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
