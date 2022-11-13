import { TestBed } from '@angular/core/testing';

import { WeathercodeService } from './weathercode.service';

describe('WeathercodeService', () => {
  let service: WeathercodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathercodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
