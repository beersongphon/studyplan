import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StructuresService } from './structures.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('StructuresService', () => {
  let service: StructuresService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new StructuresService(http);
  });

  it('should getGroup',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getGroup().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_group_id.php');
    });
    flush();
  }));

  it('should getMain',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getMain().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_main_id.php');
    });
    flush();
  }));

  it('should getCourse',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getCourse().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_course_id.php');
    });
    flush();
  }));

  it('should getGroup',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getSubject().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_subject_id.php');
    });
    flush();
  }));

  it('should getStructures',fakeAsync(() => {
    spyOn(http,"get").and.returnValue(of({}));
    service.getStructures().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_structures.php');
    });
    flush();
  }));

  it('should getStructure', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.getStructure({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_get_structures.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should insertStructure', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.insertStructure({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_insert_structures.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should updateStructure', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.updateStructure({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_edit_structures.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));

  it('should deleteStructure', fakeAsync(() => {
    spyOn(http, "post").and.returnValue(of({}));
    service.deleteStructure({}).subscribe(() => {
      expect(http.post).toHaveBeenCalledWith(environment.apiUrl + '/api_delete_structures.php', Object({}), Object({ headers: Object({ 'Content-Type': 'application/json' }) }));
    });
    flush();
  }));
});
