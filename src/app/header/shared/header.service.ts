import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './header.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(): Observable<User>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<User>(environment.apiUrl + '/api_show_user.php', { headers: apiHeader });
  }
}
