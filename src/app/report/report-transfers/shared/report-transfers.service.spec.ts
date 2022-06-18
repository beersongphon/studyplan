import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReportTransfersService } from './report-transfers.service';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ReportTransfersService', () => {
  let service: ReportTransfersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new ReportTransfersService(http);
  });

  it('should getCoursetransfer', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCoursetransfer().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_coursetransfer_student.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));
});
