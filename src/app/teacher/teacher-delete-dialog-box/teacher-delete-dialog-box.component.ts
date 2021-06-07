//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

export interface TeachersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-teacher-delete-dialog-box',
  templateUrl: './teacher-delete-dialog-box.component.html',
  styleUrls: ['./teacher-delete-dialog-box.component.css']
})
export class TeacherDeleteDialogBoxComponent {
  sub: Subscription;
  position = [];

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<TeacherDeleteDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TeachersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
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
