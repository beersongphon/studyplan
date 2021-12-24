import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userlevel } from './userlevel.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอาจารย์
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเพิ่มข้อมูลผู้ใช้
  insertUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_user_teacher.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก่ไขข้อมูลผู้ใช้
  updateUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_user.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลผู้ใช้
  deleteUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_user.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลระดับผู้ใช้
  getUserlevel(): Observable<Userlevel[]>{
    return this.http.get<Userlevel[]>(this.apiUrl + '/api_get_userlevel.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลอาจารย์
  getTeachers(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/api_get_teacher.php');
  }

  //สร้าง function สำหรับเรียกดูข้อมูลอาจารย์ทั้งหมด
  getTeacher(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_get_teacher.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลอาจารย์
  insertTeacher(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_insert_teacher.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลอาจารย์
  updateTeacher(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_edit_teacher.php', formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลอาจารย์
  deleteTeacher(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl + '/api_delete_teacher.php', formValue, { headers: apiHeader });
  }
}
