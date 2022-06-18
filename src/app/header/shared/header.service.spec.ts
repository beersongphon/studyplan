import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderService } from './header.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('HeaderService', () => {
  let service: HeaderService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new HeaderService(http);
  });

  it('should getUser', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getUser().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_show_user.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));
});
