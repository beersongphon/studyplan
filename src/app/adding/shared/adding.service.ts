import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adding, Student } from './adding.model';

@Injectable({
  providedIn: 'root'
})
export class AddingService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลนักศึกษา
  getStudent(): Observable<Student[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Student[]>(this.apiUrl + '/api_show_student.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getAdding(): Observable<Adding[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Adding[]>(this.apiUrl + '/api_get_adding_where_id.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getAddingContent(id: number): Observable<any[]>{
    const p = {
      'id': id.toString()
    };
    return this.http.get<any[]>(this.apiUrl + '/api_get_adding_contents.php', { params: p });
  }
}
