import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentAddingService } from './student-adding.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('StudentAddingService', () => {
  let service: StudentAddingService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new StudentAddingService(http);
  });

  it('should getSubject', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSubject().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_id.php');
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
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_student.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_adding.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_adding.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
