import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferService } from './shared/transfer.service';
import { ApiService } from './../shared/api.service';
import { Title } from '@angular/platform-browser';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { TransferDialogBoxComponent } from './transfer-dialog-box/transfer-dialog-box.component';
import { TransferDeleteDialogBoxComponent } from './transfer-delete-dialog-box/transfer-delete-dialog-box.component';

export interface TransferData {
  Transfer_ID: string;
  Date: string;
  Student_ID: string;
  Student_Name: string;
  Subject_Ins_ID: string;
  Subject_Ins_Name: string;
  Subject_Ins_Credit: string;
  Grade: string;
  Subject_ID: string;
  Subject_Name: string;
  Subject_Credit: string;
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
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  transfer: TransferData[];

  loginbtn: boolean;
  logoutbtn: boolean;

  //columns
  displayedColumns: string[] = ['No', 'Student_ID', 'Student_Name', 'Subject_Ins_ID', 'Subject_Ins_Name', 'Subject_Ins_Credit', 'Grade', 'Subject_ID', 'Subject_Name', 'Subject_Credit', 'action'];
  dataSource: MatTableDataSource<TransferData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  //ใน constructor กำหนดให้ transferService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน TransferService กับ ApiService
  constructor(private title: Title, private transferService: TransferService, public dialog: MatDialog,
    private apiService: ApiService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('ข้อมูลการเทียบโอนรายวิชา');
    //เรียก function getTransfers เมื่อ App เริ่มทำงาน
    this.getTransfers();
  }

  //รับข้อมูล
  getTransfers(): void {
    this.transferService.getTransfers().subscribe(
      (transfers) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getTransfers
        this.transfer = transfers;
        this.dataSource = new MatTableDataSource(transfers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //รับข้อมูล
  getTransfer(formValue: any): void {
    this.transferService.getTransfer(formValue).subscribe(
      (transfers) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getTransfer
        this.transfer = transfers;
        this.dataSource = new MatTableDataSource(transfers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  //แสดงข้อความแก้ไขข้อมูล
  updateTransfer(formValue: any): void {
    this.transferService.updateTransferDetail(formValue).subscribe(
      (messages) => {
        if(messages.status == "success") {
          this.transferService.updateTransfer(formValue).subscribe(
            (messages) => {
              if(messages.status == "success") {
                Swal.fire({
                  icon: 'success',
                  title: (messages.message),
                  showConfirmButton: false,
                  timer: 1500
                }).then((result) => {
                  if (result.isDismissed) {
                    //เรียก function getTransfers เพื่อแสดงข้อมูลล่าสุด
                    this.getTransfers();
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
        // alert(messages.message);
        // this.getTransfers();
      }
    );
  }

  //แสดงข้อความลบข้อมูล
  deleteTransfer(formValue: any): void {
    this.transferService.deleteTransfer(formValue).subscribe(
      (messages) => {
        if(messages.status == "success") {
          this.transferService.deleteTransferDetail(formValue).subscribe(
            (messages) => {
              if(messages.status == "success") {
                Swal.fire({
                  icon: 'success',
                  title: (messages.message),
                  showConfirmButton: false,
                  timer: 1500
                }).then((result) => {
                  if (result.isDismissed) {
                    //เรียก function getTransfers เพื่อแสดงข้อมูลล่าสุด
                    this.getTransfers();
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
        // alert(messages.message);
        // this.getTransfers();
      }
    );
  }

  //แสดงข้อความเพิ่มข้อมูล
  insertTransfer(formValue: any): void {
    this.transferService.insertTransfer(formValue).subscribe(
      (messages) => {
        if(messages.status == "success") {
          this.transferService.insertTransferDetail(formValue).subscribe(
            (messages) => {
              if(messages.status == "success") {
                Swal.fire({
                  icon: 'success',
                  title: (messages.message),
                  showConfirmButton: false,
                  timer: 1500
                }).then((result) => {
                  if (result.isDismissed) {
                    //เรียก function getTransfers เพื่อแสดงข้อมูลล่าสุด
                    this.getTransfers();
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
        // alert(messages.message);
        // this.getTransfers();
      }
    );
  }

  //เปิด Popup ในส่วนของปุ่มเพิ่ม แก้ไข
  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(TransferDialogBoxComponent, {
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
    const dialogRef = this.dialog.open(TransferDeleteDialogBoxComponent, {
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
    this.insertTransfer(row_obj);
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
    this.transfer = this.transfer.filter(
      (value, key) => {
        if (value.Transfer_ID === row_obj.Transfer_ID) {
          value.Student_ID = row_obj.Student_ID;
          value.Student_Name = row_obj.Student_Name;
          value.Subject_ID = row_obj.Subject_ID;
          value.Subject_Name = row_obj.Subject_Name;
          value.Subject_Credit = row_obj.Subject_Credit;
          value.Subject_Ins_ID = row_obj.Subject_Ins_ID;
          value.Subject_Ins_Name = row_obj.Subject_Ins_Name;
          value.Subject_Ins_Credit = row_obj.Subject_Ins_Credit;
          value.Grade = row_obj.Grade;
          this.updateTransfer(row_obj);
        }
        return true;
      }
    );
  }

  //ลบข้อมูล
  deleteRowData(row_obj): void {
    this.transfer = this.transfer.filter(
      (value, key) => {
        if (value.Transfer_ID === row_obj.Transfer_ID) {
          this.deleteTransfer(row_obj);
        }
        return value.Transfer_ID !== row_obj.Transfer_ID;
      }
    );
  }
}
