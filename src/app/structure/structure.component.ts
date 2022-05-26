import { Component, OnInit, OnDestroy } from '@angular/core';
import { StructureService } from './shared/structure.service';
import { ApiService } from './../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { Structure } from './shared/structure.model';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit, OnDestroy {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  structure: Structure[] = [];

  sub: Subscription;

  loginbtn: boolean;
  logoutbtn: boolean;

  //ใน constructor กำหนดให้ reporttransfersService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน ReportTransfersService กับ ApiService
  constructor(private title: Title, private structureService: StructureService,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //เรียก function getStructure เมื่อ App เริ่มทำงาน
    this.getStructure();
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('โครงสร้างหลักสูตร');
    this.structureService.getStructure().subscribe(
      (structures) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getStructure
        this.structure = structures;
      }
    );
  }

  //รับข้อมูลการเทียบโอนรายวิชา
  getStructure(): void{
    this.sub = this.structureService.getStructure().subscribe(
      (structures) => {
        console.log(structures);
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
