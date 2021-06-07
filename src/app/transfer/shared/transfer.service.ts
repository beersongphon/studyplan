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

  //กำหนด URL apiGetTransfer ที่ต้องการดึงข้อมูลการเทียบโอน
  apiGetTransfer = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_transfer.php';
  //กำหนด URL apiUpdateTransfer ที่ต้องการแก้ไขข้อมูลการเทียบโอน
  apiUpdateTransfer = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_transfer.php';
  //กำหนด URL apiDeleteTransfer ที่ต้องการลบข้อมูลการเทียบโอน
  apiDeleteTransfer = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_transfer.php';
  //กำหนด URL apiInsertTransfer ที่ต้องการเพิ่มข้อมูลการเทียบโอน
  apiInsertTransfer = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_transfer.php';

  //กำหนด URL apiUpdateTransferDetail ที่ต้องการแก้ไขข้อมูลรายละเอียดการเทียบโอน
  apiUpdateTransferDetail = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_transfer_detail.php';
  //กำหนด URL apiDeleteTransferDetail ที่ต้องการลบข้อมูลรายละเอียดการเทียบโอน
  apiDeleteTransferDetail = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_transfer_detail.php';
  //กำหนด URL apiInsertTransferDetail ที่ต้องการเพิ่มข้อมูลรายละเอียดการเทียบโอน
  apiInsertTransferDetail = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_transfer_detail.php';

  //กำหนด URL apiGetStudent ที่ต้องการดึงข้อมูลนักศึกษา
  apiGetStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_student_id.php';
  //กำหนด URL apiGetSubject ที่ต้องการดึงข้อมูลรายวิชา
  apiGetSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_id.php';
  //กำหนด URL apiGeSubjectInstitution ที่ต้องการดึงข้อมูลรายวิชาจากสถาบันเดิม
  apiGeSubjectInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_of_institution_id.php';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชาจากสถาบัน
  getSubjectInstitution(): Observable<SubjectInstitution[]>{
    return this.http.get<SubjectInstitution[]>(this.apiGeSubjectInstitution);
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiGetSubject);
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiGetStudent);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลหลักสูตร
  getTransfers(): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<any>(this.apiGetTransfer, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกดูข้อมูลหลักสูตรทั้งหมด
  getTransfer(formValue: any): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.post<any>(this.apiGetTransfer, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลการเทียบโอน
  insertTransferDetail(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertTransferDetail, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลการเทียบโอน
  updateTransferDetail(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateTransferDetail, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลการเทียบโอน
  deleteTransferDetail(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteTransferDetail, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลการเทียบโอน
  insertTransfer(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertTransfer, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลการเทียบโอน
  updateTransfer(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateTransfer, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลการเทียบโอน
  deleteTransfer(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteTransfer, formValue, { headers: apiHeader });
  }
}
