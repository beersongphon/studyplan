import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  //กำหนด URL apiGetInstitution ที่ต้องการดึงข้อมูลสถาบันเดิม
  apiGetInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_institution.php';
  //กำหนด URL apiUpdateInstitution ที่ต้องการแก้ข้อมูลสถาบันเดิม
  apiUpdateInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_institution.php';
  //กำหนด URL apiDeleteInstitution ที่ต้องการลบข้อมูลสถาบันเดิม
  apiDeleteInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_institution.php';
  //กำหนด URL apiInsertInstitution ที่ต้องการเพิ่มข้อมูลสถาบันเดิม
  apiInsertInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_institution.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกดูข้อมูล
  getInstitutions(): Observable<any[]>{
    return this.http.get<any>(this.apiGetInstitution);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลทั้งหมด
  getInstitution(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetInstitution, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูล
  insertInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertInstitution, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูล
  updateInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateInstitution, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูล
  deleteInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteInstitution, formValue, { headers: apiHeader });
  }
}
