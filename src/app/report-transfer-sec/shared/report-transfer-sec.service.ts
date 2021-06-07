import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransferSec } from './report-transfer-sec.model';

@Injectable({
  providedIn: 'root'
})
export class ReportTransferSecService {

  //กำหนด URL getTransferUrl ที่ต้องการดึงข้อมูลการเทียบโอนรายวิชา
  getTransferUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_reporttransfer_sec.php';

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransferSec[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<ReportTransferSec[]>(this.getTransferUrl, { headers: apiHeader });
  }
}
