import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectGroupService {
  //กำหนด URL apiGetGroup ที่ต้องการดึงข้อมูลกลุ่มวิชา
  apiGetGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_subject_group.php';
  //กำหนด URL apiUpdateGroup ที่ต้องการแก้ไขข้อมูลกลุ่มวิชา
  apiUpdateGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_subject_group.php';
  //กำหนด URL apiUpdateGroup ที่ต้องการลบข้อมูลกลุ่มวิชา
  apiDeleteGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_subject_group.php';
  //กำหนด URL apiUpdateGroup ที่ต้องการเพิ่มข้อมูลกลุ่มวิชา
  apiInsertGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_subject_group.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชา
  getGroups(): Observable<any[]>{
    return this.http.get<any>(this.apiGetGroup);
  }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่มวิชาทั้งหมด
  getGroup(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetGroup, formValue, { headers: apiHeader });
  }

   //สร้าง function สำหรับเพิ่มข้อมูลกลุ่มวิชา
  insertGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertGroup, formValue, { headers: apiHeader });
  }

   //สร้าง function สำหรับแก้ไขข้อมูลกลุ่มวิชา
  updateGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateGroup, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลกลุ่มวิชา
  deleteGroup(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteGroup, formValue, { headers: apiHeader });
  }
}
