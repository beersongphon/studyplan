import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Structure } from './structure.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getStructure(): Observable<Structure[]>{
    return this.http.get<Structure[]>(environment.apiUrl + '/api_get_structure.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลโครงสร้างหลักสูตร
  getStructureContent(id: number): Observable<any[]>{
    const p = {
      'id': id.toString()
    };
    return this.http.get<any[]>(environment.apiUrl + '/api_get_structure_contents.php', { params: p });
  }
}
