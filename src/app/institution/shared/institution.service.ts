import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกดูข้อมูล
  getInstitutions(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/api_get_institution.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลทั้งหมด
  getInstitution(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_institution.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูล
  insertInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_institution.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูล
  updateInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_institution.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูล
  deleteInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_institution.php', formValue, { headers: apiHeader });
  }
}
