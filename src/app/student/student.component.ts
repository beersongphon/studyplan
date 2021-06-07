import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './shared/student.service'
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { StudentDialogBoxComponent } from './student-dialog-box/student-dialog-box.component';
import { StudentDeleteDialogBoxComponent } from './student-delete-dialog-box/student-delete-dialog-box.component';

export interface StudentData {
  User_ID: string;
  User_Name: string;
  Education_Level_ID: string;
  Education_Level_Name: string;
  Year: string;
  Faculty_ID: string;
  Faculty_Name: string;
  Brand_ID: string;
  Brand_Name: string;
  Field_of_Study_ID: string;
  Field_of_Study_Name: string;
  Sec_ID: string;
  Sec_Name: string;
  Teacher_ID: string;
  Teacher_Name: string;
  Address: string;
  Phone: string;
  Email: string;
  Password: string;
  Userlevel_ID: string;
}

/*const ELEMENT_DATA: StudentData[] = [
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
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  student: StudentData[];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['User_ID', 'User_Name', 'Faculty_Name', 'Brand_Name', 'Field_of_Study_Name', 'Sec_Name', 'Teacher_Name', 'Phone', 'Email', 'action'];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private title: Title, private studentService: StudentService, public dialog: MatDialog,
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
    this.title.setTitle('ข้อมูลนักศึกษา');
    //เรียก function getStudents เมื่อ App เริ่มทำงาน
    this.getStudents();
  }

  //รับข้อมูลนักศึกษา
  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (students) => {
        this.student = students;
        this.dataSource = new MatTableDataSource(students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูลนักศึกษา
  getStudent(formValue: any): void {
    this.studentService.getStudent(formValue).subscribe(
      (students) => {
        this.student = students;
        this.dataSource = new MatTableDataSource(students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลนักศึกษา
  updateStudent(formValue: any): void {
    this.studentService.updateStudent(formValue).subscribe(
      (message) => {
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getCoursetransfers เพื่อแสดงข้อมูลล่าสุด
        //     this.getStudents();
        //   }
        // });
        alert(message.message);
        this.getStudents();
      }
    );
  }

  //แสดงข้อความลบข้อมูลนักศึกษา
  deleteStudent(formValue: any): void {
    this.studentService.deleteStudent(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getCoursetransfers เพื่อแสดงข้อมูลล่าสุด
        //     this.getStudents();
        //   }
        // });
        alert(message.message);
        this.getStudents();
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลนักศึกษา
  insertStudent(formValue: any): void {
    this.studentService.insertStudent(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getCoursetransfers เพื่อแสดงข้อมูลล่าสุด
        //     this.getStudents();
        //   }
        // });
        alert(message.message);
        this.getStudents();
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลผู้ใช้
  insertUser(formValue: any): void {
    this.studentService.insertUser(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getCoursetransfers เพื่อแสดงข้อมูลล่าสุด
        //     this.getStudents();
        //   }
        // });
        alert(message.message);
        this.getStudents();
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลผู้ใช้
  updateUser(formValue: any): void {
    this.studentService.updateUser(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getCoursetransfers เพื่อแสดงข้อมูลล่าสุด
        //     this.getStudents();
        //   }
        // });
        alert(message.message);
        this.getStudents();
      }
    );
  }

  //แสดงข้อความลบข้อมูลผู้ใช้
  deleteUser(formValue: any): void {
    this.studentService.deleteUser(formValue).subscribe(
      (message) => {
        // // this.dataSource = users;
        // Swal.fire({
        //   title: (message.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     //เรียก function getCoursetransfers เพื่อแสดงข้อมูลล่าสุด
        //     this.getStudents();
        //   }
        // });
        alert(message.message);
        this.getStudents();
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(StudentDialogBoxComponent, {
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
    const dialogRef = this.dialog.open(StudentDeleteDialogBoxComponent, {
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
    this.insertUser(row_obj);
    this.insertStudent(row_obj);
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
    this.student = this.student.filter(
      (value, key) => {
        if (value.User_ID === row_obj.User_ID) {
          value.User_Name = row_obj.User_Name;
          value.Education_Level_ID = row_obj.Education_Level_ID;
          value.Year = row_obj.Year;
          value.Faculty_ID = row_obj.Faculty_ID;
          value.Brand_ID = row_obj.Brand_ID;
          value.Field_of_Study_ID = row_obj.Field_of_Study_ID;
          value.Sec_ID = row_obj.Sec_ID;
          value.Teacher_ID = row_obj.Teacher_ID;
          value.Address = row_obj.Address;
          value.Phone = row_obj.Phone;
          value.Password = row_obj.Password;
          value.Userlevel_ID = row_obj.Userlevel_ID;
          this.updateStudent(row_obj);
          this.updateUser(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.student = this.student.filter(
      (value, key) => {
        if (value.User_ID === row_obj.User_ID) {
          this.deleteStudent(row_obj);
          this.deleteUser(row_obj);
        }
        return value.User_ID !== row_obj.User_ID;
      }
    );
  }
}
