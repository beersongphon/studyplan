import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('CourseService', () => {
  let service: CourseService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new CourseService(http);
  });

  it('should getCourses', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCourses().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_course.php');
    });
    flush();
  }));

  it('should getCourse', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getCourse({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_course.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertCourse', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertCourse({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_course.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateCourse', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateCourse({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_course.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteCourse', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteCourse({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_course.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

});
