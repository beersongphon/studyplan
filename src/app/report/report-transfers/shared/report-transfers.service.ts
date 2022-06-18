import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportTransfers, Student } from '../shared/report-transfers.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportTransfersService {

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): Observable<ReportTransfers[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<ReportTransfers[]>(environment.apiUrl + '/api_get_coursetransfer_student.php', { headers: apiHeader });
  }
}
