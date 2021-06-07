import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';
import { Main } from './group-main.model';
import { Group } from './subject-group.model';
import { Subject } from './subject.model';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  //กำหนด URL apiGetStructures ที่ต้องการดึงข้อมูลวิชา
  apiGetStructures = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_structures.php';
  //กำหนด URL apiUpdateStructures ที่ต้องการแก้ไขข้อมูลวิชา
  apiUpdateStructures = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_structures.php';
  //กำหนด URL apiDeleteStructures ที่ต้องการลบข้อมูลวิชา
  apiDeleteStructures = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_structures.php';
  //กำหนด URL apiInsertStructures ที่ต้องการเพิ่มข้อมูลวิชา
  apiInsertStructures = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_structures.php';

  //กำหนด URL apiGetCourse ที่ต้องการดึงข้อมูลหลักสูตร
  apiGetCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_course_id.php';
  //กำหนด URL apiGetMain ที่ต้องการดึงข้อมูลหมวดวิชา
  apiGetMain = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_main_id.php';
  //กำหนด URL apiGetGroup ที่ต้องการดึงข้อมูลกลุ่มวิชา
  apiGetGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_group_id.php';
  //กำหนด URL apiGetSubject ที่ต้องการดึงข้อมูลวิชา
  apiGetSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_id.php';

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
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiGetSubject);
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getStructures(): Observable<any[]>{
    return this.http.get<any>(this.apiGetStructures);
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชาทั้งหมด
  getStructure(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetStructures, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลวิชา
  insertStructure(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertStructures, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลวิชา
  updateStructure(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateStructures, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลวิชา
  deleteStructure(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteStructures, formValue, { headers: apiHeader });
  }
}
