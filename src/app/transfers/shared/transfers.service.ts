import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseTransfer } from './coursetransfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลการเทียบโอน สำหรับนักศึกษา
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลการเทียบโอน สำหรับนักศึกษา
  getCoursetransfer(): Observable<CourseTransfer[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<CourseTransfer[]>(this.apiUrl + '/api_get_coursetransfer_student.php', { headers: apiHeader });
  }
}
