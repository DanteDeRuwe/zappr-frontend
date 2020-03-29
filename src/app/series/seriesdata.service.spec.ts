import { TestBed } from '@angular/core/testing';

import { SeriesdataService } from './seriesdata.service';

describe('SeriesdataService', () => {
  let service: SeriesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
