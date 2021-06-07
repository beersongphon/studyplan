import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddingsService {

  //กำหนด URL apiGetAdding ที่ต้องการดึงข้อมูลการเพิ่มถอน
  apiGetAdding = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_adding_student_where_id.php';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
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

}
