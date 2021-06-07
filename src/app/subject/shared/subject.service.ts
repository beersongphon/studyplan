import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';
import { Main } from './group-main.model';
import { Group } from './subject-group.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  //กำหนด URL apiGetSubject ที่ต้องการดึงข้อมูลวิชา
  apiGetSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject.php';
  //กำหนด URL apiUpdateSubject ที่ต้องการแก้ไขข้อมูลวิชา
  apiUpdateSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_subject.php';
  //กำหนด URL apiDeleteSubject ที่ต้องการลบข้อมูลวิชา
  apiDeleteSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_subject.php';
  //กำหนด URL apiInsertSubject ที่ต้องการเพิ่มข้อมูลวิชา
  apiInsertSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_subject.php';

  //กำหนด URL apiGetCourse ที่ต้องการดึงข้อมูลหลักสูตร
  apiGetCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_course_id.php';
  //กำหนด URL apiGetMain ที่ต้องการดึงข้อมูลหมวดวิชา
  apiGetMain = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_main_id.php';
  //กำหนด URL apiGetGroup ที่ต้องการดึงข้อมูลกลุ่มวิชา
  apiGetGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_group_id.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชา
  getGroup(): Observable<Group[]>{
    return this.http.get<Group[]>(this.apiGetGroup);
  }

  //สร้าง function สำหรับเรียกข้อมูลหมวดวิชา
  getMain(): Observable<Main[]>{
    return this.http.get<Main[]>(this.apiGetMain);
  }

  //สร้าง function สำหรับเรียกข้อมูลหลักสูตร
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiGetCourse);
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubjects(): Observable<any[]>{
    return this.http.get<any>(this.apiGetSubject);
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชาทั้งหมด
  getSubject(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetSubject, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลวิชา
  insertSubject(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertSubject, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลวิชา
  updateSubject(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateSubject, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลวิชา
  deleteSubject(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteSubject, formValue, { headers: apiHeader });
  }
}
