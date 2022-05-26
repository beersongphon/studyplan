import { Component, OnInit } from '@angular/core';
import { AddingService } from './../adding/shared/adding.service';
import { ApiService } from './../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Adding, Student } from '../adding/shared/adding.model';

@Component({
  selector: 'app-report-adding',
  templateUrl: './report-adding.component.html',
  styleUrls: ['./report-adding.component.css']
})
export class ReportAddingComponent implements OnInit {

  logo = './assets/image/rmutp.png';
  logoWidth = 70;
  logoHeight = 135;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  student: Student[];
  adding: Adding[];

  sub: Subscription;

  id: number;
  content: any[];
  title: string;

  isShow = true;
  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ addingService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน AddingService กับ ApiService
  constructor(private titleQ: Title, private route: ActivatedRoute, private addingService: AddingService,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.titleQ.setTitle('ใบเพิ่มถอน');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title') ||'';
    //เรียก function getStudent เมื่อ App เริ่มทำงาน
    this.getStudent();
    //เรียก function getAddingContent เมื่อ App เริ่มทำงาน
    this.getAddingContent();
  }

  //รับข้อมูลเพิ่ม ถอน
  getAddingContent(): void{
    this.addingService.getAddingContent(this.id).subscribe(
      (contents) => {
        console.log(this.id);
        this.content = contents;
      }
    );
  }

  //รับข้อมูลนักศึกษา
  getStudent(): void {
    this.addingService.getStudent().subscribe(
      (students) => {
        this.student = students;
      }
    );
  }

  //ปริ้นรายงาน PDF
  printPage() {
    window.print();
  }
}
