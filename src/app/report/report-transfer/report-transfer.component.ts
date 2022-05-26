import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportTransferService } from './shared/report-transfer.service';
import { ApiService } from './../../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { ReportTransfer } from './shared/report-transfer.model';

@Component({
  selector: 'app-report-transfer',
  templateUrl: './report-transfer.component.html',
  styleUrls: ['./report-transfer.component.css']
})
export class ReportTransferComponent implements OnInit {

  //โลโก้
  logo = './assets/image/rmutp.png';
  //ความกว้างของโลโก้
  logoWidth = 85;
  //ความสูงของโลโก้
  logoHeight = 150;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  reporttransfer: ReportTransfer[] = [];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ reporttransferService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน ReportTransferService กับ ApiService
  constructor(private title: Title, private reporttransferService: ReportTransferService,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //เรียก function getCoursetransfer เมื่อ App เริ่มทำงาน
    this.getCoursetransfer();
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('รายงานสรุปสถิติผลการเทียบโอนแยกตามรายวิชาของทั้งสาขา');
    this.reporttransferService.getCoursetransfer().subscribe(
      (reporttransfers) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCoursetransfer
        this.reporttransfer = reporttransfers;
      }
    );
  }

  //รับข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): void{
    this.sub = this.reporttransferService.getCoursetransfer().subscribe(
      (reporttransfers) => {
        console.log(reporttransfers);
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
