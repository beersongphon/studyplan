import { TestBed } from '@angular/core/testing';

import { TeacherAddingService } from './teacher-adding.service';

describe('TeacherAddingService', () => {
  let service: TeacherAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
