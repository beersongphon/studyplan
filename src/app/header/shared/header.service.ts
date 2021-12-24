import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(): Observable<User[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<User[]>(this.apiUrl + '/api_show_user.php', { headers: apiHeader });
  }
}
