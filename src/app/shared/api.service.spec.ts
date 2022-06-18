import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new ApiService(http);
  });

  it('should login', fakeAsync(() => {
      let params = Object ({
      email: undefined,
      password: undefined
    })
    spyOn(http, "post").and.returnValue(of({}));
    service.login({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_login.php', params, Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
