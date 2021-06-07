import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseTransfer } from './coursetransfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  //กำหนด URL getCourseTransferUrl ที่ต้องการดึงข้อมูลการเทียบโอน สำหรับนักศึกษา
  getCourseTransferUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_coursetransfer_student.php';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลการเทียบโอน สำหรับนักศึกษา
  getCoursetransfer(): Observable<CourseTransfer[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<CourseTransfer[]>(this.getCourseTransferUrl ,{ headers: apiHeader });
  }
}
