import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TeacherService } from './teacher.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('TeacherService', () => {
  let service: TeacherService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new TeacherService(http);
  });

  it('should insertUser',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.insertUser({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_user_teacher.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));

  it('should updateUser',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.updateUser({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_user.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));

  it('should deleteUser',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.deleteUser({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_user.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));

  it('should getUserlevel',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getUserlevel().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_userlevel.php');
    });
    flush();
  }));

  it('should getTeachers',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getTeachers().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_teacher.php');
    });
    flush();
  }));

  it('should getTeacher',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.getTeacher({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_teacher.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));

  it('should insertTeacher',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.insertTeacher({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_teacher.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));

  it('should updateTeacher',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.updateTeacher({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_teacher.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));

  it('should deleteTeacher',fakeAsync(() => {
    spyOn(http,"post").and.returnValue(of({}));
    service.deleteTeacher({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_teacher.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' })}));
    });
    flush();
  }));
});
