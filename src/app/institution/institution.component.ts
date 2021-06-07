import { Component, OnInit, ViewChild } from '@angular/core';
import { InstitutionService } from './shared/institution.service';
import { ApiService } from './../shared/api.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { InstitutionDialogBoxComponent } from './institution-dialog-box/institution-dialog-box.component';
import { InstitutionDeleteDialogBoxComponent } from './institution-delete-dialog-box/institution-delete-dialog-box.component';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export interface InstitutionData {
  Institution_ID: string;
  Institution_Name: string;
}

/*const ELEMENT_DATA: CourseData[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  institution: InstitutionData[];

  loginbtn: boolean;
  logoutbtn: boolean;

  //Column
  displayedColumns: string[] = ['Institution_ID', 'Institution_Name', 'action'];
  dataSource: MatTableDataSource<InstitutionData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  //ใน constructor กำหนดให้ institutionService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน InstitutionService กับ ApiService
  constructor(private title: Title, private institutionService: InstitutionService, public dialog: MatDialog, private apiService: ApiService) {
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
    this.title.setTitle('ข้อมูลสถาบันเดิม');
    //เรียก function getInstitutions เมื่อ App เริ่มทำงาน
    this.getInstitutions();
  }

  //รับข้อมูล
  getInstitutions(): void {
    this.institutionService.getInstitutions().subscribe(
      (institutions) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getInstitutions
        this.institution = institutions;
        this.dataSource = new MatTableDataSource(institutions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูล
  getInstitution(formValue: any): void {
    this.institutionService.getInstitution(formValue).subscribe(
      (institutions) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getInstitution
        this.institution = institutions;
        this.dataSource = new MatTableDataSource(institutions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูล
  updateInstitution(formValue: any): void {
    this.institutionService.updateInstitution(formValue).subscribe(
      (message) => {
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getInstitutions เพื่อแสดงข้อมูลล่าสุด
            this.getInstitutions();
          }
        });
      }
    );
  }

  //แสดงข้อความลบข้อมูล
  deleteInstitution(formValue: any): void {
    this.institutionService.deleteInstitution(formValue).subscribe(
      (message) => {
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getInstitutions เพื่อแสดงข้อมูลล่าสุด
            this.getInstitutions();
          }
        });
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูล
  insertInstitution(formValue: any): void {
    this.institutionService.insertInstitution(formValue).subscribe(
      (message) => {
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getInstitutions เพื่อแสดงข้อมูลล่าสุด
            this.getInstitutions();
          }
        });
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(InstitutionDialogBoxComponent, {
      width: '60%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม'){
        this.addRowData(result.data);
      }else if (result.event === 'แก้ไข'){
        this.updateRowData(result.data);
      }else if (result.event === 'ลบ'){
        this.deleteRowData(result.data);
      }
    });
  }

  //เปิด Popup ในส่วนของปุ่มลบ
  openDialog2(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(InstitutionDeleteDialogBoxComponent, {
      width: '20%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม'){
        this.addRowData(result.data);
      }else if (result.event === 'แก้ไข'){
        this.updateRowData(result.data);
      }else if (result.event === 'ลบ'){
        this.deleteRowData(result.data);
      }
    });
  }

  //เพิ่มข้อมูล
  addRowData(row_obj): void {
    this.insertInstitution(row_obj);
    /*this.dataSource.push(
      {
      id: row_obj.id,
      fullname: row_obj.fullname,
      province: row_obj.province,
      email: row_obj.email,
      password: row_obj.password
      }
    );
    this.table.renderRows();*/
  }

  //แก้ไขข้อมูล
  updateRowData(row_obj): void {
    this.institution = this.institution.filter(
      (value, key) => {
        if (value.Institution_ID === row_obj.Institution_ID) {
          value.Institution_Name = row_obj.Institution_Name;
          this.updateInstitution(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void{
    this.institution = this.institution.filter(
      (value, key) =>{
        if(value.Institution_ID === row_obj.Institution_ID){
          this.deleteInstitution(row_obj);
        }
      return value.Institution_ID !== row_obj.Institution_ID;
    });
  }
}
