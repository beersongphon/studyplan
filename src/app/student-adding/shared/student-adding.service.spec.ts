import { TestBed } from '@angular/core/testing';

import { StudentAddingService } from './student-adding.service';

describe('StudentAddingService', () => {
  let service: StudentAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
