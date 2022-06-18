import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddingService } from './adding.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AddingService', () => {
  let service: AddingService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new AddingService(http);
  });

  it('should getAdding', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getAdding().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_where_id.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getAddingContent', fakeAsync(() => {
    let params = {
      id: '1'
    }
    spyOn(http, "get").and.returnValue(of({}));
    service.getAddingContent(1).subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_adding_contents.php', Object({ params }));
    });
    flush();
  }));
});
