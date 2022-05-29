import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherAddingService } from './shared/teacher-adding.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { TeacherAddingDialogBoxComponent } from './teacher-adding-dialog-box/teacher-adding-dialog-box.component';

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
  Term: string;
  Status: string;
}

/*const ELEMENT_DATA: TeacherData[] = [
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
  selector: 'app-teacher-adding',
  templateUrl: './teacher-adding.component.html',
  styleUrls: ['./teacher-adding.component.css']
})
export class TeacherAddingComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['No', 'Student_ID', 'Student_Name', 'Subject_ID', 'Subject_Name', 'Instructor', 'Date', 'Year_Name', 'Term', 'Add_Withdraw', 'Status', 'action'];
  dataSource: AddingData[];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private title: Title, private studentaddingService: TeacherAddingService, public dialog: MatDialog,
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

  //แสดงข้อความแก้ไขข้อมูลเพิ่ม ถอน
  updateAdding(formValue: any): void {
    this.studentaddingService.updateAdding(formValue).subscribe(
      (messages) => {
        // this.dataSource = users;
        if(messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
              this.getAddings();
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              window.history.back;
            }
          });
        }
      }
    );
  }

  //แสดงข้อความลบข้อมูลเพิ่ม ถอน
  deleteAdding(formValue: any): void {
    this.studentaddingService.deleteAdding(formValue).subscribe(
      (messages) => {
        // this.dataSource = users;
        if(messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
              this.getAddings();
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              window.history.back;
            }
          });
        }
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลเพิ่ม ถอน
  insertAdding(formValue: any): void {
    this.studentaddingService.insertAdding(formValue).subscribe(
      (messages) => {
        // this.dataSource = users;
        if(messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
              this.getAddings();
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              window.history.back;
            }
          });
        }
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(TeacherAddingDialogBoxComponent, {
      width: '60%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม'){
        this.addRowData(result.data);
      }else if (result.event === 'ทำการอนุมัติ'){
        this.updateRowData(result.data);
      }else if (result.event === 'ลบ'){
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

  //แก้ไขข้อมูล
  updateRowData(row_obj): void {
    this.dataSource = this.dataSource.filter(
      (value, key) => {
        if (value.Add_With_ID === row_obj.Add_With_ID) {
          value.Student_ID = row_obj.Student_ID;
          value.Teacher_ID = row_obj.Teacher_ID;
          value.Subject_ID = row_obj.Subject_ID;
          value.Year_ID = row_obj.Year_ID;
          value.Term = row_obj.Term;
          value.Date = row_obj.Date;
          value.Status = row_obj.Status;
          this.updateAdding(row_obj);
        }
        return true;
      }
    );
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
}
