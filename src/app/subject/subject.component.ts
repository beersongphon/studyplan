import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from './shared/subject.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { SubjectDialogBoxComponent } from './../subject/subject-dialog-box/subject-dialog-box.component';
import { SubjectDeleteDialogBoxComponent } from './../subject/subject-delete-dialog-box/subject-delete-dialog-box.component';

export interface SubjectData {
  Subject_ID: string;
  Main_ID: string;
  Group_ID: string;
  Subject_Name: string;
  Subject_Credit: string;
  Subject_Detail: string;
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
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  subject: SubjectData[] = [];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['Subject_ID', 'Main_Name', 'Group_Name', 'Subject_Name', 'Subject_Credit', 'Subject_Detail', 'action'];
  dataSource = new MatTableDataSource<SubjectData>(this.subject);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private title: Title, private subjectService: SubjectService, public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ข้อมูลรายวิชา');
    //เรียก function getSubjects เมื่อ App เริ่มทำงาน
    this.getSubjects();
  }

  //รับข้อมูลวิชา
  getSubjects(): void {
    this.subjectService.getSubjects().subscribe(
      (subjects) => {
        this.subject = subjects;
        this.dataSource = new MatTableDataSource(subjects);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูลวิชา
  getSubject(formValue: any): void {
    this.subjectService.getSubject(formValue).subscribe(
      (subjects) => {
        this.subject = subjects;
        this.dataSource = new MatTableDataSource(subjects);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลวิชา
  updateSubject(formValue: any): void {
    this.subjectService.updateSubject(formValue).subscribe(
      (messages) => {
        // this.dataSource = users;
        if (messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
              this.getSubjects();
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

  //แสดงข้อความลบข้อมูลวิชา
  deleteSubject(formValue: any): void {
    this.subjectService.deleteSubject(formValue).subscribe(
      (messages) => {
        // this.dataSource = users;
        if (messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
              this.getSubjects();
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

  //แสดงข้อความเพิ่มข้อมูลวิชา
  insertSubject(formValue: any): void {
    this.subjectService.insertSubject(formValue).subscribe(
      (messages) => {
        // this.dataSource = users;
        if (messages.status == "success") {
          Swal.fire({
            icon: 'success',
            title: (messages.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              //เรียก function getAddings เพื่อแสดงข้อมูลล่าสุด
              this.getSubjects();
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
    const dialogRef = this.dialog.open(SubjectDialogBoxComponent, {
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

    //openDialog(): void {
    //     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //       width: '250px',
    //       data: {name: this.name, animal: this.animal}
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //       console.log('The dialog was closed');
    //       this.animal = result;
    //     });
    //   }

  }

  //เปิด Popup ในส่วนของปุ่มลบ
  openDialog2(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(SubjectDeleteDialogBoxComponent, {
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

    //openDialog(): void {
    //     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //       width: '250px',
    //       data: {name: this.name, animal: this.animal}
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //       console.log('The dialog was closed');
    //       this.animal = result;
    //     });
    //   }

  }

  //เพิ่มข้อมูล
  addRowData(row_obj): void {
    this.insertSubject(row_obj);
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
    this.subject = this.subject.filter(
      (value, key) => {
        if (value.Subject_ID === row_obj.Subject_ID) {
          value.Main_ID = row_obj.Main_ID;
          value.Group_ID = row_obj.Group_ID;
          value.Subject_Name = row_obj.Subject_Name;
          value.Subject_Credit = row_obj.Subject_Credit;
          value.Subject_Detail = row_obj.Subject_Detail;
          this.updateSubject(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.subject = this.subject.filter(
      (value, key) => {
        if (value.Subject_ID === row_obj.Subject_ID) {
          this.deleteSubject(row_obj);
        }
        return value.Subject_ID !== row_obj.Subject_ID;
      }
    );
  }
}
