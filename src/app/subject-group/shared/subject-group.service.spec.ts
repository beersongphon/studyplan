import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SubjectGroupService } from './subject-group.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SubjectGroupService', () => {
  let service: SubjectGroupService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new SubjectGroupService(http);
  });

  it('should getGroups', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getGroups().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_group.php');
    });
    flush();
  }));

  it('should getGroup', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getGroup({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_group.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertGroup', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertGroup({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_subject_group.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateGroup', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateGroup({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_subject_group.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteGroup', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteGroup({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_subject_group.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
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

  it('should getCourse', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCourse().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_course_id.php');
    });
    flush();
  }));
});
