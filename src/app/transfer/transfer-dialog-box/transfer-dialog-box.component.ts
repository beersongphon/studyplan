import { Component, Inject, Optional, OnInit, OnDestroy, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TransferService } from '../shared/transfer.service';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export interface TransfersData {
  name: string;
  id: number;
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
  selector: 'app-transfer-dialog-box',
  templateUrl: './transfer-dialog-box.component.html',
  styleUrls: ['./transfer-dialog-box.component.css'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter}
  ]
})
export class TransferDialogBoxComponent implements OnInit, OnDestroy {

  sub: Subscription;
  student = [];
  subject = [];
  subjectinstitution = [];

  action: string;
  local_data: any;

  model1: string;
  model2: string;

  datePickerCtrl = new FormControl();
  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>,
    private transferService: TransferService,
    public dialogRef: MatDialogRef<TransferDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TransfersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }


  ngOnInit(): void {
    this.getStudent();
    this.getSubject();
    this.getSubjectInstitution();
  }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  getSubjectInstitution(): void{
    this.sub = this.transferService.getSubjectInstitution().subscribe(
      (subjectinstitutions) => {
        this.subjectinstitution = this.subjectinstitution.concat(subjectinstitutions);
      }
    );
  }
  getSubject(): void{
    this.sub = this.transferService.getSubject().subscribe(
      (subjects) => {
        this.subject = this.subject.concat(subjects);
      }
    );
  }

  getStudent(): void{
    this.sub = this.transferService.getStudent().subscribe(
      (users) => {
        this.student = this.student.concat(users);
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
