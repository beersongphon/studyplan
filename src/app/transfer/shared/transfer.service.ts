import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { Subject } from './subject.model';
import { SubjectInstitution } from './subjectinstitution.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลการเทียบโอน
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชาจากสถาบัน
  getSubjectInstitution(): Observable<SubjectInstitution[]>{
    return this.http.get<SubjectInstitution[]>(this.apiUrl + '/api_get_subject_of_institution_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiUrl + '/api_get_subject_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl + '/api_get_student_id.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลหลักสูตร
  getTransfers(): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<any>(this.apiUrl + '/api_get_transfer.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกดูข้อมูลหลักสูตรทั้งหมด
  getTransfer(formValue: any): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.post<any>(this.apiUrl + '/api_get_transfer.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลการเทียบโอน
  insertTransferDetail(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_transfer_detail.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลการเทียบโอน
  updateTransferDetail(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_transfer_detail.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลการเทียบโอน
  deleteTransferDetail(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_transfer_detail.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลการเทียบโอน
  insertTransfer(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_transfer.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลการเทียบโอน
  updateTransfer(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_transfer.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลการเทียบโอน
  deleteTransfer(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_transfer.php', formValue, { headers: apiHeader });
  }
}
