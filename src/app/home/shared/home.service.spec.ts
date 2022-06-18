import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeService } from './home.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('HomeService', () => {
  let service: HomeService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new HomeService(http);
  });

  it('should getCountUser', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountUser().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_user.php');
    });
    flush();
  }));

  it('should getCountStudent', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountStudent().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_student.php');
    });
    flush();
  }));

  it('should getCountTeacher', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountTeacher().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_teacher.php');
    });
    flush();
  }));

  it('should getCountCourse', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountCourse().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_course.php');
    });
    flush();
  }));

  it('should getCountGroup', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountGroup().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_subject_group.php');
    });
    flush();
  }));

  it('should getCountSubject', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountSubject().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_subject.php');
    });
    flush();
  }));

  it('should getCountInstitution', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountInstitution().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_institution.php');
    });
    flush();
  }));

  it('should getCountAddingStudent', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountAddingStudent().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_adding_student.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getCountTransferStudent', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountTransferStudent().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_transfer_student.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getCountAddingTeacher', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountAddingTeacher().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_adding_teacher.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getCountSubjectInstitution', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCountSubjectInstitution().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_count_subject_of_institution.php');
    });
    flush();
  }));
});
