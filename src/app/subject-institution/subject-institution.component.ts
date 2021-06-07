import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectInstitutionService } from './shared/subject-institution.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { SubjectInstitutionDialogBoxComponent } from './subject-institution-dialog-box/subject-institution-dialog-box.component';
import { SubjectInstitutionDeleteDialogBoxComponent } from './subject-institution-delete-dialog-box/subject-institution-delete-dialog-box.component';

export interface SubjectInstitutionData {
  Subject_Ins_ID: string;
  Subject_Ins_Name: string;
  Subject_Ins_Credit: string;
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
  selector: 'app-subject-institution',
  templateUrl: './subject-institution.component.html',
  styleUrls: ['./subject-institution.component.css']
})
export class SubjectInstitutionComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  subjectinstitution: SubjectInstitutionData[];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['Subject_Ins_ID', 'Subject_Ins_Name', 'Subject_Ins_Credit', 'action'];
  dataSource: MatTableDataSource<SubjectInstitutionData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  //ใน constructor กำหนดให้ subjectinstitutionService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน SubjectInstitutionService กับ ApiService
  constructor(private title: Title, private subjectinstitutionService: SubjectInstitutionService, public dialog: MatDialog,
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
    this.title.setTitle('ข้อมูลรายวิชาจากสถาบันเดิม');
    //เรียก function getSubjectofInstitutions เมื่อ App เริ่มทำงาน
    this.getSubjectofInstitutions();
  }

  //รับข้อมูลวิชาจากสถาบันเดิม
  getSubjectofInstitutions(): void {
    this.subjectinstitutionService.getSubjectofInstitutions().subscribe(
      (subjectinstitutions) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getSubjectofInstitutions
        this.subjectinstitution = subjectinstitutions;
        this.dataSource = new MatTableDataSource(subjectinstitutions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูลวิชาจากสถาบันเดิม
  getSubjectofInstitution(formValue: any): void {
    this.subjectinstitutionService.getSubjectofInstitution(formValue).subscribe(
      (subjectinstitutions) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getSubjectofInstitution
        this.subjectinstitution = subjectinstitutions;
        this.dataSource = new MatTableDataSource(subjectinstitutions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลวิชาจากสถาบันเดิม
  updateSubjectofInstitution(formValue: any): void {
    this.subjectinstitutionService.updateSubjectofInstitution(formValue).subscribe(
      (message) => {
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getSubjectofInstitutions เพื่อแสดงข้อมูลล่าสุด
            this.getSubjectofInstitutions();
          }
        });
      }
    );
  }

  //แสดงข้อความลบข้อมูลวิชาจากสถาบันเดิม
  deleteSubjectofInstitution(formValue: any): void {
    this.subjectinstitutionService.deleteSubjectofInstitution(formValue).subscribe(
      (message) => {
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getSubjectofInstitutions เพื่อแสดงข้อมูลล่าสุด
            this.getSubjectofInstitutions();
          }
        });
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลวิชาจากสถาบันเดิม
  insertSubjectofInstitution(formValue: any): void {
    this.subjectinstitutionService.insertSubjectofInstitution(formValue).subscribe(
      (message) => {
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getSubjectofInstitutions เพื่อแสดงข้อมูลล่าสุด
            this.getSubjectofInstitutions();
          }
        });
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(SubjectInstitutionDialogBoxComponent, {
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
    const dialogRef = this.dialog.open(SubjectInstitutionDeleteDialogBoxComponent, {
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
    this.insertSubjectofInstitution(row_obj);

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
    this.subjectinstitution = this.subjectinstitution.filter(
      (value, key) => {
        if (value.Subject_Ins_ID === row_obj.Subject_Ins_ID) {
          value.Subject_Ins_Name = row_obj.Subject_Ins_Name;
          value.Subject_Ins_Credit = row_obj.Subject_Ins_Credit;
          this.updateSubjectofInstitution(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.subjectinstitution = this.subjectinstitution.filter(
      (value, key) => {
        if (value.Subject_Ins_ID === row_obj.Subject_Ins_ID) {
          this.deleteSubjectofInstitution(row_obj);
        }
        return value.Subject_Ins_ID !== row_obj.Subject_Ins_ID;
      }
    );
  }
}
