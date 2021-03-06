import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Main, Course } from './subject-group.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectGroupService {

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชา
  getGroups(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl + '/api_get_subject_group.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชาทั้งหมด
  getGroup(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_get_subject_group.php', formValue, { headers: apiHeader });
  }

   //สร้าง function สำหรับเพิ่มข้อมูลกลุ่มวิชา
  insertGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_insert_subject_group.php', formValue, { headers: apiHeader });
  }

   //สร้าง function สำหรับแก้ไขข้อมูลกลุ่มวิชา
  updateGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_edit_subject_group.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลกลุ่มวิชา
  deleteGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_delete_subject_group.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลหมวดวิชา
  getMain(): Observable<Main[]>{
    return this.http.get<Main[]>(environment.apiUrl + '/api_get_main_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(environment.apiUrl + '/api_get_course_id.php');
  }
}
