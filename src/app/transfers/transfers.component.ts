import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransfersService } from './shared/transfers.service';
import { ApiService } from './../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { CourseTransfer } from './shared/transfer.model';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit, OnDestroy {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  coursetransfer: CourseTransfer[];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private title: Title, private transfersService: TransfersService,
    private apiService: ApiService) {
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
    //เรียก function getCoursetransfer เมื่อ App เริ่มทำงาน
    this.getCoursetransfer();
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ผลการเทียบโอนรายวิชา');
    this.transfersService.getCoursetransfer().subscribe(
      (coursetransfers) => {
        //console.log(books);
        this.coursetransfer = coursetransfers;
      }
    );
  }

  //รับข้อมูลการเทียบโอน สำหรับนักศึกษา
  getCoursetransfer(): void{
    this.sub = this.transfersService.getCoursetransfer().subscribe(
      (coursetransfers) => {
        console.log(coursetransfers);
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
