import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //กำหนด URL apiUser ที่ต้องการดึงข้อมูลผู้ใช้ตอนเข้าสู่ระบบ
  apiUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_show_user.php';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(): Observable<User[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<User[]>(this.apiUser, { headers: apiHeader });
  }
}
