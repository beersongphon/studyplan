import { Component, Inject, Optional, OnInit, OnDestroy, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StudentAddingService } from '../shared/student-adding.service';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AddWithdraw } from '../shared/addwithdraw.model';

export interface SubjectsData {
  name: string;
  id: number;
}

interface Status {
  Status: string;
}

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-student-adding-dialog-box',
  templateUrl: './student-adding-dialog-box.component.html',
  styleUrls: ['./student-adding-dialog-box.component.css'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter}
  ]
})
export class StudentAddingDialogBoxComponent implements OnInit, OnDestroy {
  addwithdraws: AddWithdraw[] = [
    {Add_Withdraw: 'เพิ่มรายวิชา'},
    {Add_Withdraw: 'ถอนรายวิชา'}
  ];
  sub: Subscription;
  student = [];
  teacher = [];
  subject = [];
  year = [];

  action: string;
  local_data: any;

  datePickerCtrl = new FormControl();

  model1: string;
  model2: string;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>,
    private studentaddingService: StudentAddingService,
    public dialogRef: MatDialogRef<StudentAddingDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SubjectsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
    // this.getStudents();
    this.getTeacher();
    this.getSubject();
    this.getYear();
  }

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

  getYear(): void{
    this.sub = this.studentaddingService.getYear().subscribe(
      (years) => {
        this.year = this.year.concat(years);
      }
    );
  }

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  getSubject(): void{
    this.sub = this.studentaddingService.getSubject().subscribe(
      (subjects) => {
        this.subject = this.subject.concat(subjects);
      }
    );
  }

  // getStudents(): void{
  //   this.sub = this.studentaddingService.getStudents().subscribe(
  //     (students) => {
  //       this.student = this.student.concat(students);
  //     }
  //   );
  // }

  getTeacher(): void{
    this.sub = this.studentaddingService.getTeacher().subscribe(
      (teachers) => {
        this.teacher = this.teacher.concat(teachers);
      }
    );
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  doAction(): void {
    this.dialogRef.close(
      {
        event: this.action,
        data: this.local_data
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(
      {
        event: 'ยกเลิก'
      }
    );
  }

}

