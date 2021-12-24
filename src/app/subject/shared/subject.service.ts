import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, Main, Group } from './subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลวิชา
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชา
  getGroup(): Observable<Group[]>{
    return this.http.get<Group[]>(this.apiUrl + '/api_get_subject_group_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลหมวดวิชา
  getMain(): Observable<Main[]>{
    return this.http.get<Main[]>(this.apiUrl + '/api_get_main_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl + '/api_get_course_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubjects(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/api_get_subject.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชาทั้งหมด
  getSubject(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_subject.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลวิชา
  insertSubject(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_subject.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลวิชา
  updateSubject(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_subject.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลวิชา
  deleteSubject(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_subject.php', formValue, { headers: apiHeader });
  }
}
