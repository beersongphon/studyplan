import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SubjectInstitutionsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-subject-institution-delete-dialog-box',
  templateUrl: './subject-institution-delete-dialog-box.component.html',
  styleUrls: ['./subject-institution-delete-dialog-box.component.css']
})
export class SubjectInstitutionDeleteDialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<SubjectInstitutionDeleteDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SubjectInstitutionsData) {
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
