import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportTransferSecService } from './shared/report-transfer-sec.service';
import { ApiService } from './../../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { ReportTransferSec } from './shared/report-transfer-sec.model';

@Component({
  selector: 'app-report-transfer-sec',
  templateUrl: './report-transfer-sec.component.html',
  styleUrls: ['./report-transfer-sec.component.css']
})
export class ReportTransferSecComponent implements OnInit, OnDestroy {

  //โลโก้
  logo = './assets/image/rmutp.png';
  //ความกว้างของโลโก้
  logoWidth = 85;
  //ความสูงของโลโก้
  logoHeight = 150;

  reporttransfersec: ReportTransferSec[] = [];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ reporttransfersecService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน ReportTransferSecService กับ ApiService
  constructor(private title: Title, private reporttransfersecService: ReportTransferSecService,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //เรียก function getCoursetransfer เมื่อ App เริ่มทำงาน
    this.getCoursetransfer();
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('รายงานสรุปสถิติผลการเทียบโอนแยกตามรายวิชาของทั้งห้อง');
    this.reporttransfersecService.getCoursetransfer().subscribe(
      (reporttransfersecs) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCoursetransfer
        this.reporttransfersec = reporttransfersecs;
      }
    );
  }

  //รับข้อมูลการเทียบโอนรายวิชา
  getCoursetransfer(): void{
    this.sub = this.reporttransfersecService.getCoursetransfer().subscribe(
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
