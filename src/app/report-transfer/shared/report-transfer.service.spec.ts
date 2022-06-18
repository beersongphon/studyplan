import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReportTransferService } from './report-transfer.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ReportTransferService', () => {
  let service: ReportTransferService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new ReportTransferService(http);
  });

  it('should getCoursetransfer', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCoursetransfer().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_reporttransfer_all.php');
    });
    flush();
  }));
});
