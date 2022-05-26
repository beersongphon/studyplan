import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from './shared/teacher.service'
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { TeacherDialogBoxComponent } from './teacher-dialog-box/teacher-dialog-box.component';
import { TeacherDeleteDialogBoxComponent } from './teacher-delete-dialog-box/teacher-delete-dialog-box.component';

export interface TeacherData {
  User_ID: string;
  User_Name: string;
  Address: string;
  Phone: string;
  Email: string;
  Password: string;
  Userlevel_ID: string;
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
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  teacher: TeacherData[] = [];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['User_ID', 'User_Name', 'Address', 'Phone', 'Email', 'action'];
  dataSource = new MatTableDataSource<TeacherData>(this.teacher);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private title: Title, private teacherService: TeacherService, public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ข้อมูลอาจารย์');
    //เรียก function getTeachers เมื่อ App เริ่มทำงาน
    this.getTeachers();
  }

  //รับข้อมูลอาจารย์
  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (teachers) => {
        // this.teacher = teachers;
        this.dataSource = new MatTableDataSource(teachers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูลอาจารย์
  getTeacher(formValue: any): void {
    this.teacherService.getTeacher(formValue).subscribe(
      (teachers) => {
        // this.teacher = teachers;
        this.dataSource = new MatTableDataSource(teachers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลอาจารย์
  updateTeacher(formValue: any): void {
    this.teacherService.updateTeacher(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getTeachers เพื่อแสดงข้อมูลล่าสุด
        //     this.getTeachers();
        //   }
        // });
        alert(message.message);
        this.getTeachers();
      }
    );
  }

  //แสดงข้อความลบข้อมูลอาจารย์
  deleteTeacher(formValue: any): void {
    this.teacherService.deleteTeacher(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getTeachers เพื่อแสดงข้อมูลล่าสุด
        //     this.getTeachers();
        //   }
        // });
        alert(message.message);
        this.getTeachers();
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลอาจารย์
  insertTeacher(formValue: any): void {
    this.teacherService.insertTeacher(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getTeachers เพื่อแสดงข้อมูลล่าสุด
        //     this.getTeachers();
        //   }
        // });
        alert(message.message);
        this.getTeachers();
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลผู้ใช้
  insertUser(formValue: any): void {
    this.teacherService.insertUser(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getTeachers เพื่อแสดงข้อมูลล่าสุด
        //     this.getTeachers();
        //   }
        // });
        alert(message.message);
        this.getTeachers();
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลผู้ใช้
  updateUser(formValue: any): void {
    this.teacherService.updateUser(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getTeachers เพื่อแสดงข้อมูลล่าสุด
        //     this.getTeachers();
        //   }
        // });
        alert(message.message);
        this.getTeachers();
      }
    );
  }

  //แสดงข้อความลบข้อมูลผู้ใช้
  deleteUser(formValue: any): void {
    this.teacherService.deleteUser(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getTeachers เพื่อแสดงข้อมูลล่าสุด
        //     this.getTeachers();
        //   }
        // });
        alert(message.message);
        this.getTeachers();
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(TeacherDialogBoxComponent, {
      width: '60%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'เพิ่ม'){
        this.addRowData(result.data);
      }else if (result === 'แก้ไข'){
        this.updateRowData(result.data);
      }else if (result === 'ลบ'){
        this.deleteRowData(result.data);
      }
    });
  }

  //เปิด Popup ในส่วนของปุ่มลบ
  openDialog2(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(TeacherDeleteDialogBoxComponent, {
      width: '20%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'เพิ่ม'){
        this.addRowData(result.data);
      }else if (result === 'แก้ไข'){
        this.updateRowData(result.data);
      }else if (result === 'ลบ'){
        this.deleteRowData(result.data);
      }
    });
  }

  //เพิ่มข้อมูล
  addRowData(row_obj): void {
    this.insertUser(row_obj);
    this.insertTeacher(row_obj);
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
    this.teacher = this.teacher.filter(
      (value, key) => {
        if (value.User_ID === row_obj.User_ID) {
          value.User_Name = row_obj.User_Name;
          value.Address = row_obj.Address;
          value.Phone = row_obj.Phone;
          value.Email = row_obj.Email;
          value.Password = row_obj.Password;
          value.Userlevel_ID = row_obj.Userlevel_ID;
          this.updateTeacher(row_obj);
          this.updateUser(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.teacher = this.teacher.filter(
      (value, key) => {
        if (value.User_ID === row_obj.User_ID) {
          this.deleteTeacher(row_obj);
          this.deleteUser(row_obj);
        }
        return value.User_ID !== row_obj.User_ID;
      }
    );
  }
}
