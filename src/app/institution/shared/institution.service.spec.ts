import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InstitutionService } from './institution.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('InstitutionService', () => {
  let service: InstitutionService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new InstitutionService(http);
  });

  it('should getInstitutions', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getInstitutions().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_institution.php');
    });
    flush();
  }));

  it('should getInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteInstitution', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteInstitution({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_institution.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
