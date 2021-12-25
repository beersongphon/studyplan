import { Component, OnInit } from '@angular/core';
import { ReportTransferSecService } from './../report-transfer-sec/shared/report-transfer-sec.service';
import { ApiService } from './../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Structure } from './../structure/shared/structure.model';

@Component({
  selector: 'app-listname-transfer',
  templateUrl: './listname-transfer.component.html',
  styleUrls: ['./listname-transfer.component.css']
})
export class ListnameTransferComponent implements OnInit {

  //โลโก้
  logo = './assets/image/IS.png';
  //ความกว้างของโลโก้
  logoWidth = 85;
  //ความสูงของโลโก้
  logoHeight = 72;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  structure: Structure[];

  id: string;
  content: any[];
  title: string;

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ structureService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน structureService กับ ApiService
  constructor(private titleQ: Title, private route: ActivatedRoute, private reportTransferSec: ReportTransferSecService,
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
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
    //เรียก function getStructureContent เมื่อ App เริ่มทำงาน
    this.getTransfer();
  }

  //รับข้อมูลโครงสร้างหลักสูตร
  getTransfer(): void{
    this.reportTransferSec.getTransfer(this.id).subscribe(
      (contents) => {
        //console.log(contents);
        this.content = contents;
      }
    );
  }

  //แบ่งสิทธิ์สำหรับทุกระดับผู้ใช้
  isLogin() {
    if (this.apiService.isLoggedIn) {
      return true
    } else {
      return false
    }
  }

  //แบ่งสิทธิ์สำหรับผู้ดูแลระบบ
  isAdmin() {
    if (this.apiService.getUserlevel() == '1') {
      return true
    } else {
      return false
    }
  }

  //แบ่งสิทธิ์สำหรับอาจารย์ที่ปรึกษา
  isTeacher() {
    if (this.apiService.getUserlevel() == '3') {
      return true
    } else {
      return false
    }
  }
}
