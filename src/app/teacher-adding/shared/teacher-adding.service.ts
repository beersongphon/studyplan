import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { Teacher } from './teacher.model';
import { Subject } from './subject.model';
import { Year } from './year.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherAddingService {
  //กำหนด URL apiGetAdding ที่ต้องการดึงข้อมูลการเพิ่ม ถอน สำหรับอาจารย์
  apiGetAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_adding_teacher.php';
  //กำหนด URL apiUpdateTeacher ที่ต้องการแก้ไขข้อมูลการเพิ่ม ถอน สำหรับอาจารย์
  apiUpdateAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_adding.php';
  //กำหนด URL apiDeleteAdding ที่ต้องการแก้ไขข้อมูลการเพิ่ม ถอน สำหรับอาจารย์
  apiDeleteAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_subject.php';
  //กำหนด URL apiInsertAdding ที่ต้องการแก้ไขข้อมูลการเพิ่ม ถอน สำหรับอาจารย์
  apiInsertAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_adding.php';

  //กำหนด URL apiGetStudent ที่ต้องการดึงข้อมูลนักศึกษา
  apiGetStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_student_id.php';
  //กำหนด URL apiGetTeacher ที่ต้องการดึงข้อมูลอาจารย์
  apiGetTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_teacher_id.php';
  //กำหนด URL apiGetSubject ที่ต้องการดึงข้อมูลรายวิชา
  apiGetSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_id.php';
  //กำหนด URL apiGetYear ที่ต้องการดึงข้อมูลปีการศึกษา
  apiGetYear = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_year_id.php';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลวิชา
  getSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiGetSubject);
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiGetStudent);
  }

  //สร้าง function สำหรับเรียกข้อมูลอาจารย์
  getTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiGetTeacher);
  }

  //สร้าง function สำหรับเรียกข้อมูลปีการศึกษา
  getYear(): Observable<Year[]>{
    return this.http.get<Year[]>(this.apiGetYear);
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  getAddings(): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<any>(this.apiGetAdding, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน ทั้งหมด สำหรับอาจารย์
  getAdding(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetAdding, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  insertAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertAdding, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  updateAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateAdding, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลเพิ่ม ถอน สำหรับอาจารย์
  deleteAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteAdding, formValue, { headers: apiHeader });
  }
}
