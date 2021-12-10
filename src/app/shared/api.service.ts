import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class Users {
  public id_user: number;
  public name: string;
  public email: string;
  public password: string;
  public position: string;

  }
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  redirectUrl: string | undefined;
  //กำหนด URL logineUrl ที่ต้องการเข้าสู่ระบบ
  loginUrl: string = "http://web.rmutp.ac.th/bus/studyplan/api/api_login.php";
  //registerUrl: string = "http://web.rmutp.ac.th/bus/studyplan/api/register.php";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเข้าสู่ระบบ
  public userlogin(Username: any,Password: any): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const body = {
      Username,
      Password
    };
    return this.http.post<any>(this.loginUrl, body, { headers: header }).pipe(
      map(
        (Users) => {
          this.setToken(Users[0].User_ID, Users[0].Userlevel_ID );
          this.getLoggedInName.emit(true);
          return Users;
        }
      )
    );
  }

  // public userregistration(User_Name: any, Email: any, Password: any) {
  //   return this.http.post<any>(this.registerUrl, { User_Name, Email, Password }).pipe(
  //     map(
  //       Users => {
  //         return Users;
  //       }
  //     )
  //   );
  // }

  //token
  setToken(token: string, Userlevel_ID: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userlevel_id', Userlevel_ID);
  }

  //รับค่า token
  getToken() {
    return localStorage.getItem('token');
  }

  //ลบค่า token
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userlevel_id');
  }

  log(): void {

  }

  //รับค่า Userlevel
  getUserlevel(): string {
    return localStorage.getItem('userlevel_id');
  }

  //เช็ค token
  isLoggedIn(): boolean {
    const token = this.getToken();
    console.log(token);
    if (token != null) {
      return true
    }
    return false;
  }


  logout(): void {
    localStorage.clear();
  }
}
