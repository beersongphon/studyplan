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
export class StudentAddingService {

  //กำหนด URL apiGetAdding ที่ต้องการดึงข้อมูลการเพิ่มถอน
  apiGetAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_adding_student.php';
  //กำหนด URL apiDeleteAdding ที่ต้องการลบข้อมูลการเพิ่มถอน
  apiDeleteAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_adding.php';
  //กำหนด URL apiInsertAdding ที่ต้องการเพิ่มข้อมูลการเพิ่มถอน
  apiInsertAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_adding.php';

  //กำหนด URL apiGetStudent ที่ต้องการดึงข้อมูลนักศึกษา
  apiGetStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_show_student.php';
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

  //สร้าง function สำหรับเรียกข้อมูลอาจารย์
  getTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiGetTeacher);
  }

  //สร้าง function สำหรับเรียกข้อมูลปีการศึกษา
  getYear(): Observable<Year[]>{
    return this.http.get<Year[]>(this.apiGetYear);
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน สำหรับนักศึกษา
  getAddings(): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<any>(this.apiGetAdding, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน ทั้งหมด สำหรับนักศึกษา
  getAdding(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetAdding, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลเพิ่ม ถอน
  insertAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertAdding, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลเพิ่ม ถอน
  deleteAdding(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteAdding, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudents(): Observable<Student[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Student[]>(this.apiGetStudent, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่ม ถอน ทั้งหมด สำหรับนักศึกษา
  getStudent(formValue: any): Observable<any[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.post<any>(this.apiGetStudent, formValue, { headers: apiHeader });
  }

}
