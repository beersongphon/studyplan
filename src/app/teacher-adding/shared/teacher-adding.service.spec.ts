import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TeacherAddingService } from './teacher-adding.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('TeacherAddingService', () => {
  let service: TeacherAddingService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new TeacherAddingService(http);
  });

  it('should getSubject', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSubject().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_id.php');
    });
    flush();
  }));

  it('should getStudent', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getStudent().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_student_id.php');
    });
    flush();
  }));

  it('should getTeacher', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getTeacher().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_teacher_id.php');
    });
    flush();
  }));

  it('should getYear', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getYear().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_year_id.php');
    });
    flush();
  }));

  it('should getAddings', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getAddings().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_teacher.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_teacher.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_adding.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_adding.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_subject.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
