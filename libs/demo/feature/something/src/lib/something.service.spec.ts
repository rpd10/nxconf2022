import { TestBed } from '@angular/core/testing';

import { SomethingService } from './something.service';

describe('SomethingService', () => {
  let service: SomethingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomethingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
