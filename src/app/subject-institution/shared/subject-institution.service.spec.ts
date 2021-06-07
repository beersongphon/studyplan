import { TestBed } from '@angular/core/testing';

import { SubjectInstitutionService } from './subject-institution.service';

describe('SubjectInstitutionService', () => {
  let service: SubjectInstitutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectInstitutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
