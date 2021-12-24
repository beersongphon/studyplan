import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Structure } from './structure.model';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getStructure(): Observable<Structure[]>{
    return this.http.get<Structure[]>(this.apiUrl + '/api_get_structure.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลโครงสร้างหลักสูตร
  getStructureContent(id: number): Observable<any[]>{
    const p = {
      'id': id.toString()
    };
    return this.http.get<any[]>(this.apiUrl + '/api_get_structure_contents.php', { params: p });
  }
}
