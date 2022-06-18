import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentService } from './student.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('StudentService', () => {
  let service: StudentService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new StudentService(http);
  });

  it('should getInstitution', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getInstitution().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_institution_id.php');
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

  it('should getEducationLevel', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getEducationLevel().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_education_level_id.php');
    });
    flush();
  }));

  it('should getFaculty', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getFaculty().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_faculty_id.php');
    });
    flush();
  }));

  it('should getBrand', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getBrand().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_brand_id.php');
    });
    flush();
  }));

  it('should getFieldofStudy', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getFieldofStudy().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_field_of_study_id.php');
    });
    flush();
  }));

  it('should getSec', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSec().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_sec_id.php');
    });
    flush();
  }));

  it('should insertUser', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertUser({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_user_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateUser', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateUser({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_user_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteUser', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteUser({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_user.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should getUserlevel', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getUserlevel().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_userlevel.php');
    });
    flush();
  }));

  it('should getStudents', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getStudents().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_student.php');
    });
    flush();
  }));

  it('should getStudent', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getStudent({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertStudent', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertStudent({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateStudent', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateStudent({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteStudent', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteStudent({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_student.php', {}, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
