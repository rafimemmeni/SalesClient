import { TestBed } from '@angular/core/testing';

import { EmiiterService } from './emiiter.service';

describe('EmiiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmiiterService = TestBed.get(EmiiterService);
    expect(service).toBeTruthy();
  });
});
