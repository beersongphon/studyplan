import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransferSec } from './report-transfer-sec.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportTransferSecService {

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransferSec[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<ReportTransferSec[]>(environment.apiUrl + '/api_get_reporttransfer_sec.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกข้อมูลเพิ่มถอนสำหรับอนุมัติทั้งหมด
  getTransfer(id: number, title: string): Observable<any[]>{
    const p = {
      'id': id.toString(),
      'title' : title
    };
    return this.http.get<any[]>(environment.apiUrl + '/api_get_listname_transfer.php', { params: p });
  }
}
