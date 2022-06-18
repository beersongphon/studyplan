import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReportTransferSecService } from './report-transfer-sec.service';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ReportTransferSecService', () => {
  let service: ReportTransferSecService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new ReportTransferSecService(http);
  });

  it('should getCoursetransfer', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getCoursetransfer().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_reporttransfer_sec.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getTransfer', fakeAsync(() => {
    let params = {
      id: '1',
      title: 'd'
    }
    spyOn(http, "get").and.returnValue(of({}));
    service.getTransfer(1, 'd').subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_listname_transfer.php', Object({ params }));
    });
    flush();
  }));
});
