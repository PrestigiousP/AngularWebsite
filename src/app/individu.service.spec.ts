import { TestBed } from '@angular/core/testing';

import { IndividuService } from './individu.service';

describe('IndividuService', () => {
  let service: IndividuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
