import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectInstitutionService {

  //กำหนด URL apiGetSubjectofInstitution ที่ต้องการดึงข้อมูลวิชาจากสถาบันเดิม
  apiGetSubjectofInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_of_institution.php';
  //กำหนด URL apiUpdateSubjectofInstitution ที่ต้องการแก้ไขข้อมูลวิชาจากสถาบันเดิม
  apiUpdateSubjectofInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_subject_of_institution.php';
  //กำหนด URL apiDeleteSubjectofInstitution ที่ต้องการลบข้อมูลวิชาจากสถาบันเดิม
  apiDeleteSubjectofInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_subject_of_institution.php';
  //กำหนด URL apiInsertSubjectofInstitution ที่ต้องการเพิ่มข้อมูลวิชาจากสถาบันเดิม
  apiInsertSubjectofInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_subject_of_institution.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกดูข้อมูลวิชาจากสถาบันเดิม
  getSubjectofInstitutions(): Observable<any[]>{
    return this.http.get<any>(this.apiGetSubjectofInstitution);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลวิชาจากสถาบันเดิมทั้งหมด
  getSubjectofInstitution(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetSubjectofInstitution, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลวิชาจากสถาบันเดิม
  insertSubjectofInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertSubjectofInstitution, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลวิชาจากสถาบันเดิม
  updateSubjectofInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateSubjectofInstitution, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลวิชาจากสถาบันเดิม
  deleteSubjectofInstitution(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteSubjectofInstitution, formValue, { headers: apiHeader });
  }
}
