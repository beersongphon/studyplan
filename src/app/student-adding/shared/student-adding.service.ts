import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, Teacher, Subject, Year } from './adding.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentAddingService {

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(environment.apiUrl + '/api_get_subject_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลอาจารย์
  getTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(environment.apiUrl + '/api_get_teacher_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลปีการศึกษา
  getYear(): Observable<Year[]>{
    return this.http.get<Year[]>(environment.apiUrl + '/api_get_year_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน สำหรับนักศึกษา
  getAddings(): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<any>(environment.apiUrl + '/api_get_adding_student.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน ทั้งหมด สำหรับนักศึกษา
  getAdding(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_get_adding_student.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลเพิ่ม ถอน
  insertAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_insert_adding.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลเพิ่ม ถอน
  deleteAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_delete_adding.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudents(): Observable<Student[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Student[]>(environment.apiUrl+ '/api_show_student.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน ทั้งหมด สำหรับนักศึกษา
  getStudent(formValue: any): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.post<any>(environment.apiUrl + '/api_show_student.php', formValue, { headers: apiHeader });
  }

}
