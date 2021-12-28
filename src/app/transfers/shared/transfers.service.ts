import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseTransfer } from './transfer.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(private http: HttpClient) { }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกข้อมูลการเทียบโอน สำหรับนักศึกษา
  getCoursetransfer(): Observable<CourseTransfer[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<CourseTransfer[]>(environment.apiUrl + '/api_get_coursetransfer_student.php', { headers: apiHeader });
  }
}
