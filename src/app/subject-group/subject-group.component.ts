import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectGroupService } from './shared/subject-group.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { SubjectGroupDialogBoxComponent } from './subject-group-dialog-box/subject-group-dialog-box.component';
import { SubjectGroupDeleteDialogBoxComponent } from './subject-group-delete-dialog-box/subject-group-delete-dialog-box.component';

export interface GroupData {
  Group_ID: string;
  Main_ID: string;
  Main_Name: string;
  Course_ID: string;
  Course_Name: string;
  Group_Name: string;
  Group_Credit: string;
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
  selector: 'app-subject-group',
  templateUrl: './subject-group.component.html',
  styleUrls: ['./subject-group.component.css']
})
export class SubjectGroupComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  group: GroupData[] = [];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['Group_ID', 'Main_ID', 'Main_Name', 'Course_ID', 'Group_Name', 'Group_Credit', 'action'];
  dataSource = new MatTableDataSource<GroupData>(this.group);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private title: Title, private subjectgroupService: SubjectGroupService, public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ข้อมูลกลุ่มวิชา');
    //เรียก function getGroups เมื่อ App เริ่มทำงาน
    this.getGroups();
  }

  //รับข้อมูลกลุ่มวิชา
  getGroups(): void {
    this.subjectgroupService.getGroups().subscribe(
      (groups) => {
        this.group = groups;
        this.dataSource = new MatTableDataSource(groups);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูลกลุ่มวิชา
  getGroup(formValue: any): void {
    this.subjectgroupService.getGroup(formValue).subscribe(
      (groups) => {
        this.group = groups;
        this.dataSource = new MatTableDataSource(groups);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลกลุ่มวิชา
  updateGroup(formValue: any): void {
    this.subjectgroupService.updateGroup(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            this.getGroups();
          }
        });
      }
    );
  }

  //แสดงข้อความลบข้อมูลกลุ่มวิชา
  deleteGroup(formValue: any): void {
    this.subjectgroupService.deleteGroup(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            this.getGroups();
          }
        });
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลกลุ่มวิชา
  insertGroup(formValue: any): void {
    this.subjectgroupService.insertGroup(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            this.getGroups();
          }
        });
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(SubjectGroupDialogBoxComponent, {
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
    const dialogRef = this.dialog.open(SubjectGroupDeleteDialogBoxComponent, {
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
    this.insertGroup(row_obj);
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
    this.group = this.group.filter(
      (value, key) => {
        if (value.Group_ID === row_obj.Group_ID  ) {
          value.Main_ID = row_obj.Main_ID;
          value.Course_ID = row_obj.Course_ID;
          value.Group_Name = row_obj.Group_Name;
          value.Group_Credit = row_obj.Group_Credit;
          this.updateGroup(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.group = this.group.filter(
      (value, key) => {
        if (value.Group_ID === row_obj.Group_ID ) {
          this.deleteGroup(row_obj);
        }
        return value.Group_ID !== row_obj.Group_ID ;
      }
    );
  }
}
