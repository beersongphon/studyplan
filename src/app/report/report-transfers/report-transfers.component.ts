import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportTransfersService } from './shared/report-transfers.service';
import { ApiService } from './../../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { ReportTransfers } from './shared/report-transfers.model';
import { Student } from './shared/report-transfers.model';

@Component({
  selector: 'app-report-transfers',
  templateUrl: './report-transfers.component.html',
  styleUrls: ['./report-transfers.component.css']
})
export class ReportTransfersComponent implements OnInit, OnDestroy {

  //โลโก้
  logo = './assets/image/rmutp.png';
  //ความกว้างของโลโก้
  logoWidth = 85;
  //ความสูงของโลโก้
  logoHeight = 150;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  reporttransfers: ReportTransfers[];
  student: Student[];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ reporttransfersService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน ReportTransfersService กับ ApiService
  constructor(private title: Title, private reporttransfersService: ReportTransfersService,
    private apiService: ApiService) {

  }

  //เปลี่ยนปุ่มสำหรับเข้าสู่ระบบ
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  ngOnInit(): void {
    //เรียก function getStudent เมื่อ App เริ่มทำงาน
    this.getStudent();
    //เรียก function getCoursetransfer เมื่อ App เริ่มทำงาน
    this.getCoursetransfer();
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('รายงานสรุปผลการบันทึกรายวิชาเทียบโอน');
    this.reporttransfersService.getCoursetransfer().subscribe(
      (reporttransfer) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCoursetransfer
        this.reporttransfers = reporttransfer
      }
    );
  }

  //รับข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): void{
    this.sub = this.reporttransfersService.getCoursetransfer().subscribe(
      (reporttransfer) => {
        console.log(reporttransfer);
      }
    );
  }

  //รับข้อมูลนักศึกษา
  getStudent(): void {
    this.reporttransfersService.getStudent().subscribe(
      (students) => {
        this.student = students;
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  //ปริ้นรายงาน PDF
  printPage() {
    window.print();
  }
}
