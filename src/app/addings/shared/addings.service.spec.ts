import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddingsService } from './addings.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AddingsService', () => {
  let service: AddingsService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new AddingsService(http);
  });

  it('should getAddings', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getAddings().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_student_where_id.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getAdding', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getAdding({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_student_where_id.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

});
