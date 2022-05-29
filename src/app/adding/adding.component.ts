import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddingService } from './shared/adding.service';
import { ApiService } from './../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Adding } from './shared/adding.model';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit, OnDestroy {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  adding: Adding[] = [];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ addingService กับ AddingService เป็นตัวแปรแบบ private และ เรียกใช้งาน AddingService กับ ApiService
  constructor(private title: Title, private addingService: AddingService,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('รายงานข้อมูลการเพิ่มถอน');
    //เรียก function getAdding เมื่อ App เริ่มทำงาน
    this.getAdding();
    this.addingService.getAdding().subscribe(
      (addings) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getAdding
        this.adding = addings;
      }
    );
  }

  //รับข้อมูลการเพิ่มถอน
  getAdding(): void {
    this.sub = this.addingService.getAdding().subscribe(
      (reportaddings) => {
        console.log(reportaddings);
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  //ปริ้นรายงาน PDF
  printPage() {
    window.print();
  }
}
