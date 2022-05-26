import { Component, OnInit } from '@angular/core';
import { AddingsService } from './shared/addings.service';
import { ApiService } from './../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Adding } from './shared/adding.model';

@Component({
  selector: 'app-addings',
  templateUrl: './addings.component.html',
  styleUrls: ['./addings.component.css']
})
export class AddingsComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  adding: Adding[];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(
    private title: Title, private addingsService: AddingsService,
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
    this.addingsService.getAddings().subscribe(
      (addings) => {
        this.adding = addings;
      }
    );
  }

  //รับข้อมูลเพิ่ม ถอน
  getAdding(formValue: any): void {
    this.addingsService.getAdding(formValue).subscribe(
      (addings) => {
        this.adding = addings;
      }
    );
  }
}
