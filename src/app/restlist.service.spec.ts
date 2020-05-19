import { TestBed } from '@angular/core/testing';

import { RestlistService } from './restlist.service';

describe('RestlistService', () => {
  let service: RestlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
