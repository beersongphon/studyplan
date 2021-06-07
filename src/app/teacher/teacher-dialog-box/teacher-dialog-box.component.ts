//dialog-box.component.ts
import { Component, Inject, Optional, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TeacherService } from './../shared/teacher.service';

export interface TeachersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-teacher-dialog-box',
  templateUrl: './teacher-dialog-box.component.html',
  styleUrls: ['./teacher-dialog-box.component.css']
})
export class TeacherDialogBoxComponent implements OnInit, OnDestroy {
  sub: Subscription;
  userlevel = [];

  action: string;
  local_data: any;

  constructor(private teacherService: TeacherService,
    public dialogRef: MatDialogRef<TeacherDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TeachersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
    this.getUserlevel();
  }

  getUserlevel(): void{
    this.sub = this.teacherService.getUserlevel().subscribe(
      (userlevels) => {
        this.userlevel = this.userlevel.concat(userlevels);
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
