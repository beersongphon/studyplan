import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from './shared/header.service';
import { ApiService } from './../shared/api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from './shared/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  loginbtn: boolean;
  logoutbtn: boolean;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  user: User;

  sub: Subscription;

  //ใน constructor กำหนดให้ headerService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน HeaderService กับ ApiService
  constructor(private apiService: ApiService, private headerService: HeaderService, private router: Router) {
    apiService.getLoggedInName.subscribe(
      name => this.changeName(name)
    );
    //เช็ค token
    if (this.apiService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
  }

  //เปลี่ยนปุ่มสำหรับเข้าสู่ระบบ
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  ngOnInit(): void {
    //เรียก function getUser เมื่อ App เริ่มทำงาน
    this.getUser();
  }

  //รับข้อมูลจำนวนผู้ใช้ทั้งหมด
  getUser(): void {
    this.sub = this.headerService.getUser().subscribe(
      (users) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountUser
        this.user = users;
        console.log(users);
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  //ออกจากระบบ
  logout(): void {
    localStorage.clear();
    // this.apiService.deleteToken();
    this.logoutbtn = false
    this.router.navigate(['/login']);
  }
}
