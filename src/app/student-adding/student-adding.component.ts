import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { StudentAddingService } from './shared/student-adding.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { StudentAddingDialogBoxComponent } from './student-adding-dialog-box/student-adding-dialog-box.component';
import { StudentAddingDeleteDialogBoxComponent } from './student-adding-delete-dialog-box/student-adding-delete-dialog-box.component';

import { Student } from './shared/adding.model';

export interface AddingData {
  Add_With_ID: string;
  Student_ID: string;
  Student_Name: string;
  Teacher_ID: string;
  Teacher_Name: string;
  Subject_ID: string;
  Subject_Name: string;
  Date: string;
  Year_ID: string;
  Year_Name: string;
  Status: string;
}

/*const ELEMENT_DATA: SubjectData[] = [
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
  selector: 'app-student-adding',
  templateUrl: './student-adding.component.html',
  styleUrls: ['./student-adding.component.css']
})
export class StudentAddingComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  student: Student[];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['No', 'Student_ID', 'Student_Name', 'Subject_ID', 'Subject_Name', 'Instructor', 'Date', 'Year_Name', 'Term', 'Add_Withdraw', 'Status', 'action'];
  dataSource: AddingData[];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  //ใน constructor กำหนดให้ studentaddingService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน StudentAddingService กับ ApiService
  constructor(
    private title: Title, private studentaddingService: StudentAddingService, public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('เพิ่มถอนรายวิชา');
    //เรียก function getStudents เมื่อ App เริ่มทำงาน
    this.getStudents();
    //เรียก function getAddings เมื่อ App เริ่มทำงาน
    this.getAddings();
  }

  //รับข้อมูลเพิ่ม ถอน
  getAddings(): void {
    this.studentaddingService.getAddings().subscribe(
      (addings) => {
        this.dataSource = addings;
      }
    );
  }

  //รับข้อมูลเพิ่ม ถอน
  getAdding(formValue: any): void {
    this.studentaddingService.getAdding(formValue).subscribe(
      (addings) => {
        this.dataSource = addings;
      }
    );
  }

  //แสดงข้อความลบข้อมูลเพิ่ม ถอน
  deleteAdding(formValue: any): void {
    this.studentaddingService.deleteAdding(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
            this.getAddings();
          }
        });
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลเพิ่ม ถอน
  insertAdding(formValue: any): void {
    this.studentaddingService.insertAdding(formValue).subscribe(
      (message) => {
        console.log(message);
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
            this.getAddings();
          }
        });
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(StudentAddingDialogBoxComponent, {
      width: '60%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม/ถอน') {
        this.addRowData(result.data);
      } else if (result.event === 'ลบ') {
        this.deleteRowData(result.data);
      }
    });
  }

  //เปิด Popup ในส่วนของปุ่มลบ
  openDialog2(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(StudentAddingDeleteDialogBoxComponent, {
      width: '20%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม') {
        this.addRowData(result.data);
      } else if (result.event === 'ลบ') {
        this.deleteRowData(result.data);
      }
    });
  }

  //เพิ่มข้อมูล
  addRowData(row_obj): void {
    this.insertAdding(row_obj);
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

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.dataSource = this.dataSource.filter(
      (value, key) => {
        if (value.Add_With_ID === row_obj.Add_With_ID) {
          this.deleteAdding(row_obj);
        }
        return value.Add_With_ID !== row_obj.Add_With_ID;
      }
    );
  }

  //รับข้อมูลนักศึกษา
  getStudents(): void {
    this.studentaddingService.getStudents().subscribe(
      (students) => {
        this.student = students;
      }
    );
  }

  //รับข้อมูลนักศึกษา
  getStudent(formValue: any): void {
    this.studentaddingService.getStudent(formValue).subscribe(
      (students) => {
        this.student = students;
      }
    );
  }
}
