import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Structure } from './structure.model';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  //กำหนด URL getStructureUrl ที่ต้องการดึงข้อมูลหลักสูตร
  getStructureUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_structure.php';
  //กำหนด URL getStructureContentUrl ที่ต้องการดึงข้อมูลโครงสร้างหลักสูตร
  getStructureContentUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_structure_contents.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getStructure(): Observable<Structure[]>{
    return this.http.get<Structure[]>(this.getStructureUrl);
  }

  //สร้าง function สำหรับเรียกข้อมูลโครงสร้างหลักสูตร
  getStructureContent(id: number): Observable<any[]>{
    const p = {
      'id': id.toString()
    };
    return this.http.get<any[]>(this.getStructureContentUrl, { params: p });
  }
}
