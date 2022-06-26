import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddingsService } from './shared/addings.service';
import { ApiService } from './../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Addings } from './shared/addings.model';

@Component({
  selector: 'app-addings',
  templateUrl: './addings.component.html',
  styleUrls: ['./addings.component.css']
})
export class AddingsComponent implements OnInit, OnDestroy {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  addings: Addings[];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private title: Title, private addingsService: AddingsService,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('เพิ่มถอนรายวิชา');
    //เรียก function getAddings เมื่อ App เริ่มทำงาน
    this.getAddings();
  }

  //รับข้อมูลเพิ่ม ถอน
  getAddings(): void {
    this.sub = this.addingsService.getAddings().subscribe(
      (adding) => {
        this.addings = adding;
      }
    );
  }

  //รับข้อมูลเพิ่ม ถอน
  getAdding(formValue: any): void {
    this.addingsService.getAdding(formValue).subscribe(
      (adding) => {
        this.addings = adding;
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
