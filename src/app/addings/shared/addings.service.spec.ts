import { TestBed } from '@angular/core/testing';

import { AddingsService } from './addings.service';

describe('AddingsService', () => {
  let service: AddingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
