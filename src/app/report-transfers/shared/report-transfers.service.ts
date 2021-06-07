import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransfers } from '../shared/report-transfers.model';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class ReportTransfersService {

  //กำหนด URL getTransferUrl ที่ต้องการดึงข้อมูลการเทียบโอนรายวิชา
  getTransferUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_coursetransfer_student.php';

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

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransfers[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<ReportTransfers[]>(this.getTransferUrl, { headers: apiHeader });
  }
}
