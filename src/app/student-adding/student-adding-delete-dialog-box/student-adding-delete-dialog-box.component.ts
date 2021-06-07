import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SubjectsData {
  name: string;
  id: number;
}

interface Status {
  Status: string;
}

@Component({
  selector: 'app-student-adding-delete-dialog-box',
  templateUrl: './student-adding-delete-dialog-box.component.html',
  styleUrls: ['./student-adding-delete-dialog-box.component.css']
})
export class StudentAddingDeleteDialogBoxComponent {
  statuss: Status[] = [
    {Status: 'รอการอนุมัติ'},
    {Status: 'อนุมัติ'},
    {Status: 'ไม่อนุมัติ'}
  ];

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<StudentAddingDeleteDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SubjectsData) {
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

