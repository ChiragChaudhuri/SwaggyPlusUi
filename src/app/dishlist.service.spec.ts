import { TestBed } from '@angular/core/testing';

import { DishlistService } from './dishlist.service';

describe('DishlistService', () => {
  let service: DishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
