import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SubjectInstitutionService } from './subject-institution.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SubjectInstitutionService', () => {
  let service: SubjectInstitutionService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new SubjectInstitutionService(http);
  });

  it('should getSubjectofInstitutions', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSubjectofInstitutions().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_of_institution.php');
    });
    flush();
  }));

  it('should getSubjectofInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getSubjectofInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_of_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertSubjectofInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertSubjectofInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_subject_of_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateSubjectofInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateSubjectofInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_subject_of_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteSubjectofInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteSubjectofInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_subject_of_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
