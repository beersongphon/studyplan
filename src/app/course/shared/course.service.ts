import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //กำหนด URL apiGetCourse ที่ต้องการดึงข้อมูลหลักสูตร
  apiGetCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_course.php';
  //กำหนด URL apiUpdateCourse ที่ต้องการแก้ข้อมูลหลักสูตร
  apiUpdateCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_course.php';
  //กำหนด URL apiDeleteCourse ที่ต้องการลบข้อมูลหลักสูตร
  apiDeleteCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_course.php';
  //กำหนด URL apiInsertCourse ที่ต้องการเพิ่มข้อมูลหลักสูตร
  apiInsertCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_course.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกดูข้อมูล
  getCourses(): Observable<any[]>{
    return this.http.get<any>(this.apiGetCourse);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลทั้งหมด
  getCourse(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetCourse, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูล
  insertCourse(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertCourse, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูล
  updateCourse(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateCourse, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูล
  deleteCourse(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteCourse, formValue, { headers: apiHeader });
  }
}
