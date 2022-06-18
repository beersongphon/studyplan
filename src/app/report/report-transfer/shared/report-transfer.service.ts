import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransfer } from './report-transfer.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportTransferService {

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransfer[]>{
    return this.http.get<ReportTransfer[]>(environment.apiUrl + '/api_get_reporttransfer_all.php');
  }
}
