import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SubjectService } from './subject.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SubjectService', () => {
  let service: SubjectService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new SubjectService(http);
  });

  it('should getGroup', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getGroup().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_group_id.php');
    });
    flush();
  }));

  it('should getMain', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getMain().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_main_id.php');
    });
    flush();
  }));

  it('should getGroup', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getGroup().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_group_id.php');
    });
    flush();
  }));

  it('should getCourse', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCourse().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_course_id.php');
    });
    flush();
  }));

  it('should getSubjects', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSubjects().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject.php');
    });
    flush();
  }));

  it('should getSubject', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getSubject({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertSubject', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertSubject({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_subject.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateSubject', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateSubject({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_subject.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteSubject', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteSubject({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_subject.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
