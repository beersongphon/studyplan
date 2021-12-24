import { Component, Inject, Optional, OnInit, OnDestroy, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TeacherAddingService } from '../shared/teacher-adding.service';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddWithdraw } from '../shared/adding.model';

export interface AddingsData {
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
  selector: 'app-teacher-adding-dialog-box',
  templateUrl: './teacher-adding-dialog-box.component.html',
  styleUrls: ['./teacher-adding-dialog-box.component.css'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter}
  ]
})
export class TeacherAddingDialogBoxComponent implements OnInit, OnDestroy {
  statuss: Status[] = [
    {Status: 'รอการอนุมัติ'},
    {Status: 'อนุมัติ'},
    {Status: 'ไม่อนุมัติ'}
  ];
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

  model1: string;
  model2: string;

  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>,
    private teacheraddingService: TeacherAddingService,
    public dialogRef: MatDialogRef<TeacherAddingDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AddingsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }


  ngOnInit(): void {
    this.getStudent();
    this.getTeacher();
    this.getSubject();
    this.getYear();
  }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  getYear(): void{
    this.sub = this.teacheraddingService.getYear().subscribe(
      (years) => {
        this.year = this.year.concat(years);
      }
    );
  }

  getSubject(): void{
    this.sub = this.teacheraddingService.getSubject().subscribe(
      (subjects) => {
        this.subject = this.subject.concat(subjects);
      }
    );
  }

  getStudent(): void{
    this.sub = this.teacheraddingService.getStudent().subscribe(
      (students) => {
        this.student = this.student.concat(students);
      }
    );
  }

  getTeacher(): void{
    this.sub = this.teacheraddingService.getTeacher().subscribe(
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

