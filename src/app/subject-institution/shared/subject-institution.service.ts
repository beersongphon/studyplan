import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectInstitutionService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลวิชาจากสถาบันเดิม
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกดูข้อมูลวิชาจากสถาบันเดิม
  getSubjectofInstitutions(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/api_get_subject_of_institution.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลวิชาจากสถาบันเดิมทั้งหมด
  getSubjectofInstitution(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_subject_of_institution.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลวิชาจากสถาบันเดิม
  insertSubjectofInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_subject_of_institution.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลวิชาจากสถาบันเดิม
  updateSubjectofInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_subject_of_institution.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลวิชาจากสถาบันเดิม
  deleteSubjectofInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_subject_of_institution.php', formValue, { headers: apiHeader });
  }
}
