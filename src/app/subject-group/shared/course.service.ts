import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //กำหนด URL apiGetCourse ที่ต้องการดึงข้อมูลหลักสูตร
  apiGetCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_course_id.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiGetCourse);
  }
}
