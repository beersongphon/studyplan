import { Component, OnInit } from '@angular/core';
import { StructureService } from './../structure/shared/structure.service';
import { ApiService } from './../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Structure } from './../structure/shared/structure.model';

@Component({
  selector: 'app-report-structure',
  templateUrl: './report-structure.component.html',
  styleUrls: ['./report-structure.component.css']
})
export class ReportStructureComponent implements OnInit {

  //โลโก้
  logo = './assets/image/IS.png';
  //ความกว้างของโลโก้
  logoWidth = 85;
  //ความสูงของโลโก้
  logoHeight = 72;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  structure: Structure[];

  id: number;
  content: any[];
  title: string;

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ structureService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน structureService กับ ApiService
  constructor(private titleQ: Title, private route: ActivatedRoute, private structureService: StructureService,
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
    //แสดงชื่อแท็บของเว็บไซค์
    this.titleQ.setTitle('โครงสร้างหลักสูตร');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
    //เรียก function getStructureContent เมื่อ App เริ่มทำงาน
    this.getStructureContent();
  }

  //รับข้อมูลโครงสร้างหลักสูตร
  getStructureContent(): void{
    this.structureService.getStructureContent(this.id).subscribe(
      (contents) => {
        //console.log(contents);
        this.content = contents;
      }
    );
  }

  //ปริ้นรายงาน PDF
  printPage() {
    window.print();
  }
}
