import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userlevel } from './userlevel.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  //กำหนด URL apiGetTeacher ที่ต้องการดึงข้อมูลอาจารย์
  apiGetTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_teacher.php';
  //กำหนด URL apiUpdateTeacher ที่ต้องการแก้ไขข้อมูลอาจารย์
  apiUpdateTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_teacher.php';
  //กำหนด URL apiDeleteTeacher ที่ต้องการลบข้อมูลอาจารย์
  apiDeleteTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_teacher.php';
  //กำหนด URL apiInsertTeacher ที่ต้องการเพิ่มข้อมูลข้อมูลอาจารย์
  apiInsertTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_teacher.php';

  //กำหนด URL apiInsertUser ที่ต้องการเพิ่มข้อมูลผู้ใช้
  apiInsertUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_user_teacher.php';
  //กำหนด URL apiUpdateUser ที่ต้องการแก้ไขข้อมูลผู้ใช้
  apiUpdateUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_user.php';
  //กำหนด URL apiDeleteUser ที่ต้องการลบข้อมูลผู้ใช้
  apiDeleteUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_user.php';

  //กำหนด URL apiGetUserlevel ที่ต้องการดึงข้อมูลระดับผู้ใช้
  apiGetUserlevel = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_userlevel.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเพิ่มข้อมูลผู้ใช้
  insertUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertUser, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก่ไขข้อมูลผู้ใช้
  updateUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateUser, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลผู้ใช้
  deleteUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteUser, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลระดับผู้ใช้
  getUserlevel(): Observable<Userlevel[]>{
    return this.http.get<Userlevel[]>(this.apiGetUserlevel);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลอาจารย์
  getTeachers(): Observable<any[]>{
    return this.http.get<any>(this.apiGetTeacher);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลอาจารย์ทั้งหมด
  getTeacher(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetTeacher, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลอาจารย์
  insertTeacher(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertTeacher, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลอาจารย์
  updateTeacher(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateTeacher, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลอาจารย์
  deleteTeacher(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteTeacher, formValue, { headers: apiHeader });
  }
}
