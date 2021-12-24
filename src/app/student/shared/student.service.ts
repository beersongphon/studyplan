import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userlevel, Teacher, Institution, EducationLevel, Faculty, Brand, FieldofStudy, Sec } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลสถาบันเดิม
  getInstitution(): Observable<Institution[]>{
    return this.http.get<Institution[]>(this.apiUrl + '/api_get_institution_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลอาจารย์
  getTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl + '/api_get_teacher_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลระดับการศึกษา
  getEducationLevel(): Observable<EducationLevel[]>{
    return this.http.get<EducationLevel[]>(this.apiUrl + '/api_get_education_level_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลคณะ
  getFaculty(): Observable<Faculty[]>{
    return this.http.get<Faculty[]>(this.apiUrl + '/api_get_faculty_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลสาขาวิชา
  getBrand(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.apiUrl + '/api_get_brand_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลแขวงวิชา
  getFieldofStudy(): Observable<FieldofStudy[]>{
    return this.http.get<FieldofStudy[]>(this.apiUrl + '/api_get_field_of_study_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่ม
  getSec(): Observable<Sec[]>{
    return this.http.get<Sec[]>(this.apiUrl + '/api_get_sec_id.php');
  }

  //สร้าง function สำหรับเพิ่มข้อมูลผู้ใช้
  insertUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_user_student.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลผู้ใช้
  updateUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_user_student.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลผู้ใช้
  deleteUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_user.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลระดับผู้ใช้
  getUserlevel(): Observable<Userlevel[]>{
    return this.http.get<Userlevel[]>(this.apiUrl + '/api_get_userlevel.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลนักศึกษา
  getStudents(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/api_get_student.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลนักศึกษาทั้งหมด
  getStudent(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_student.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลนักศึกษา
  insertStudent(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_student.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลนักศึกษา
  updateStudent(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_student.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลนักศึกษา
  deleteStudent(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_student.php', formValue, { headers: apiHeader });
  }
}
