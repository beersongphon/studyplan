import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransfer } from './report-transfer.model';

@Injectable({
  providedIn: 'root'
})
export class ReportTransferService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransfer[]>{
    return this.http.get<ReportTransfer[]>(this.apiUrl + '/api_get_reporttransfer_all.php');
  }
}
