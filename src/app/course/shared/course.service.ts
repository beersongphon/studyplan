import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกดูข้อมูล
  getCourses(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl + '/api_get_course.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลทั้งหมด
  getCourse(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_get_course.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูล
  insertCourse(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_insert_course.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูล
  updateCourse(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_edit_course.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูล
  deleteCourse(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(environment.apiUrl + '/api_delete_course.php', formValue, { headers: apiHeader });
  }
}
