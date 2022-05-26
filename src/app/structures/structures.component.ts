import { Component, OnInit, ViewChild } from '@angular/core';
import { StructuresService } from './shared/structures.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { StructuresDialogBoxComponent } from './structures-dialog-box/structures-dialog-box.component';
import { StructuresDeleteDialogBoxComponent } from './structures-delete-dialog-box/structures-delete-dialog-box.component';

export interface StructureData {
  Structure_ID: string;
  Subject_ID: string;
  Course_ID: string;
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
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  structure: StructureData[] = [];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['Subject_ID', 'Course_ID', 'Main_Name', 'Group_Name', 'Subject_Name', 'Subject_Credit', 'Subject_Detail', 'action'];
  dataSource = new MatTableDataSource<StructureData>(this.structure);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private title: Title, private structuresService: StructuresService, public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ข้อมูลโครงสร้างหลักสูตร');
    //เรียก function getStructures เมื่อ App เริ่มทำงาน
    this.getStructures();
  }

  //รับข้อมูลวิชา
  getStructures(): void {
    this.structuresService.getStructures().subscribe(
      (structures) => {
        this.structure = structures;
        this.dataSource = new MatTableDataSource(structures);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูลวิชา
  getStructure(formValue: any): void {
    this.structuresService.getStructure(formValue).subscribe(
      (structures) => {
        this.structure = structures;
        this.dataSource = new MatTableDataSource(structures);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูลวิชา
  updateStructure(formValue: any): void {
    this.structuresService.updateStructure(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            this.getStructures();
          }
        });
      }
    );
  }

  //แสดงข้อความลบข้อมูลวิชา
  deleteStructure(formValue: any): void {
    this.structuresService.deleteStructure(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            this.getStructures();
          }
        });
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูลวิชา
  insertStructure(formValue: any): void {
    this.structuresService.insertStructure(formValue).subscribe(
      (message) => {
        // this.dataSource = users;
        Swal.fire({
          title: (message.message),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            this.getStructures();
          }
        });
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(StructuresDialogBoxComponent, {
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
    const dialogRef = this.dialog.open(StructuresDeleteDialogBoxComponent, {
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
    this.insertStructure(row_obj);
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
    this.structure = this.structure.filter(
      (value, key) => {
        if (value.Structure_ID === row_obj.Structure_ID) {
          value.Subject_ID = row_obj.Subject_ID;
          value.Course_ID = row_obj.Course_ID;
          value.Main_ID = row_obj.Main_ID;
          value.Group_ID = row_obj.Group_ID;
          value.Subject_Name = row_obj.Subject_Name;
          value.Subject_Credit = row_obj.Subject_Credit;
          value.Subject_Detail = row_obj.Subject_Detail;
          this.updateStructure(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.structure = this.structure.filter(
      (value, key) => {
        if (value.Structure_ID === row_obj.Structure_ID) {
          this.deleteStructure(row_obj);
        }
        return value.Structure_ID !== row_obj.Structure_ID;
      }
    );
  }
}
