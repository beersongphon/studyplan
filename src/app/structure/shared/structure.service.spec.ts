import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StructureService } from './structure.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('StructureService', () => {
  let service: StructureService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = new HttpClient(null);
    service = new StructureService(http);
  });

  it('should getStructure', fakeAsync(() => {
    spyOn(http, "get").and.returnValue(of({}));
    service.getStructure().subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_structure.php');
    });
    flush();
  }));

  it('should getStructureContent', fakeAsync(() => {
    let params = {
      id: '1',
      title: 'd'
    }
    spyOn(http, "get").and.returnValue(of({}));
    service.getStructureContent(1, 'd').subscribe(() => {
      expect(http.get).toHaveBeenCalledWith(environment.apiUrl + '/api_get_structure_contents.php', Object({ params }));
    });
    flush();
  }));
});
