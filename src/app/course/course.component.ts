import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from './shared/course.service'
import { ApiService } from './../shared/api.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CourseDialogBoxComponent } from './course-dialog-box/course-dialog-box.component';
import { CourseDeleteDialogBoxComponent } from './course-delete-dialog-box/course-delete-dialog-box.component';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export interface CourseData {
  Course_ID: string;
  Course_Name: string;
  Course_Allcredit: number;
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
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  course: CourseData[] = [];

  loginbtn: boolean;
  logoutbtn: boolean;

  //Column
  displayedColumns: string[] = ['Course_ID', 'Course_Name', 'Course_Allcredit', 'action'];

  dataSource = new MatTableDataSource<CourseData>(this.course);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  //ใน constructor กำหนดให้ courseService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน CourseService กับ ApiService
  constructor(private title: Title, private courseService: CourseService,
    public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ข้อมูลหลักสูตร');
    //เรียก function getCourses เมื่อ App เริ่มทำงาน
    this.getCourses();
  }

  //รับข้อมูล
  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (courses) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร Courses
        this.course = courses;
        this.dataSource = new MatTableDataSource(courses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูล
  getCourse(formValue: any): void {
    this.courseService.getCourse(formValue).subscribe(
      (courses) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร Course
        this.course = courses;
        this.dataSource = new MatTableDataSource(courses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  //แสดงข้อความแก้ไขข้อมูล
  updateCourse(formValue: any): void {
    this.courseService.updateCourse(formValue).subscribe(
      (messages) => {
        if (messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getCourses เพื่อแสดงข้อมูลล่าสุด
              this.getCourses();
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

  //แสดงข้อความลบข้อมูล
  deleteCourse(formValue: any): void {
    this.courseService.deleteCourse(formValue).subscribe(
      (messages) => {
        if (messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getCourses เพื่อแสดงข้อมูลล่าสุด
              this.getCourses();
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

  //แสดงข้อความเพิ่มข้อมูล
  insertCourse(formValue: any): void {
    this.courseService.insertCourse(formValue).subscribe(
      (messages) => {
        if (messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getCourses เพื่อแสดงข้อมูลล่าสุด
              this.getCourses();
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
    const dialogRef = this.dialog.open(CourseDialogBoxComponent, {
      width: '60%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม') {
        this.addRowData(result.data);
      } else if (result.event === 'แก้ไข') {
        this.updateRowData(result.data);
      } else if (result.event === 'ลบ') {
        this.deleteRowData(result.data);
      }
    });
  }

  //เปิด Popup ในส่วนของปุ่มลบ
  openDialog2(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(CourseDeleteDialogBoxComponent, {
      width: '20%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'เพิ่ม') {
        this.addRowData(result.data);
      } else if (result.event === 'แก้ไข') {
        this.updateRowData(result.data);
      } else if (result.event === 'ลบ') {
        this.deleteRowData(result.data);
      }
    });
  }

  //เพิ่มข้อมูล
  addRowData(row_obj): void {
    this.insertCourse(row_obj);
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
    this.course = this.course.filter(
      (value, key) => {
        if (value.Course_ID === row_obj.Course_ID) {
          value.Course_Name = row_obj.Course_Name;
          value.Course_Allcredit = row_obj.Course_Allcredit;
          this.updateCourse(row_obj);
        }
        this.dataSource.data = this.course;
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.course = this.course.filter(
      (value, key) => {
        if (value.Course_ID === row_obj.Course_ID) {
          this.deleteCourse(row_obj);
        }
        this.dataSource.data = this.course;
        return value.Course_ID !== row_obj.Course_ID;
      }
    );
  }
}
