import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Main, Course } from './subject-group.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectGroupService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชา
  getGroups(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/api_get_subject_group.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชาทั้งหมด
  getGroup(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_subject_group.php', formValue, { headers: apiHeader });
  }

   //สร้าง function สำหรับเพิ่มข้อมูลกลุ่มวิชา
  insertGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_subject_group.php', formValue, { headers: apiHeader });
  }

   //สร้าง function สำหรับแก้ไขข้อมูลกลุ่มวิชา
  updateGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_subject_group.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลกลุ่มวิชา
  deleteGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_subject_group.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลหมวดวิชา
  getMain(): Observable<Main[]>{
    return this.http.get<Main[]>(this.apiUrl + '/api_get_main_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl + '/api_get_course_id.php');
  }
}
