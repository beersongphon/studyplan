import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TransferService } from './transfer.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('TransferService', () => {
  let service: TransferService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new TransferService(http);
  });

  it('should getSubjectInstitution', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSubjectInstitution().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_of_institution_id.php');
    });
    flush();
  }));

  it('should getSubject', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getSubject().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_id.php');
    });
    flush();
  }));

  it('should getStudent', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getStudent().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_student_id.php');
    });
    flush();
  }));

  it('should getTransfers', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getTransfers().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_transfer.php', Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should getTransfer', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getTransfer({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_transfer.php', Object({}), Object({ headers: Object({ Authorization: null }) }));
    });
    flush();
  }));

  it('should insertTransferDetail', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertTransferDetail({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_transfer_detail.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateTransferDetail', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateTransferDetail({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_transfer_detail.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteTransferDetail', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteTransferDetail({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_transfer_detail.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertTransfer', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertTransfer({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_transfer.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateTransfer', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateTransfer({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_transfer.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteTransfer', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteTransfer({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_transfer.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
