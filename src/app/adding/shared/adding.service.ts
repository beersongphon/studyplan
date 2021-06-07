import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adding } from './adding.model';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class AddingService {

  //กำหนด URL getAddingUrl ที่ต้องการดึงข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getAddingUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_adding_where_id.php';
  //กำหนด URL getAddingContentUrl ที่ต้องการดึงข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getAddingContentUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_adding_contents.php';

  //กำหนด URL apiGetStudent ที่ต้องการดึงข้อมูลนักศึกษา
  apiGetStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_show_student.php';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudent(): Observable<Student[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Student[]>(this.apiGetStudent, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getAdding(): Observable<Adding[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Adding[]>(this.getAddingUrl, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getAddingContent(id: number): Observable<any[]>{
    const p = {
      'id': id.toString()
    };
    return this.http.get<any[]>(this.getAddingContentUrl, { params: p });
  }
}
