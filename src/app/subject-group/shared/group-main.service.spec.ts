import { TestBed } from '@angular/core/testing';

import { GroupMainService } from './group-main.service';

describe('GroupMainService', () => {
  let service: GroupMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
