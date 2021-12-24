import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import { Year } from './year.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherAddingService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลการเพิ่ม ถอน สำหรับอาจารย์
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiUrl + '/api_get_subject_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl + '/api_get_student_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลอาจารย์
  getTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl + '/api_get_teacher_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลปีการศึกษา
  getYear(): Observable<Year[]>{
    return this.http.get<Year[]>(this.apiUrl + '/api_get_year_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  getAddings(): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<any>(this.apiUrl + '/api_get_adding_teacher.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน ทั้งหมด สำหรับอาจารย์
  getAdding(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_adding_teacher.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  insertAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_adding.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  updateAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_adding.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  deleteAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_subject.php', formValue, { headers: apiHeader });
  }
}
