import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, Course, Main, Group } from './structures.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชา
  getGroup(): Observable<Group[]>{
    return this.http.get<Group[]>(environment.apiUrl + '/api_get_subject_group_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลหมวดวิชา
  getMain(): Observable<Main[]>{
    return this.http.get<Main[]>(environment.apiUrl + '/api_get_main_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(environment.apiUrl + '/api_get_course_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(environment.apiUrl + '/api_get_subject_id.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getStructures(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl + '/api_get_structures.php');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชาทั้งหมด
  getStructure(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_get_structures.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลวิชา
  insertStructure(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_insert_structures.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลวิชา
  updateStructure(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_edit_structures.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลวิชา
  deleteStructure(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_delete_structures.php', formValue, { headers: apiHeader });
  }
}
