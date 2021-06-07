import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransfer } from './report-transfer.model';

@Injectable({
  providedIn: 'root'
})
export class ReportTransferService {

  //กำหนด URL getTransferUrl ที่ต้องการดึงข้อมูลการเทียบโอนรายวิชา
  getTransferUrl = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_reporttransfer_all.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransfer[]>{
    return this.http.get<ReportTransfer[]>(this.getTransferUrl);
  }
}
