//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface InstitutionsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-institution-delete-dialog-box',
  templateUrl: './institution-delete-dialog-box.component.html',
  styleUrls: ['./institution-delete-dialog-box.component.css']
})
export class InstitutionDeleteDialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<InstitutionDeleteDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: InstitutionsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(): void{
    this.dialogRef.close(
      {
        event: this.action,
        data: this.local_data
      }
    );
  }

  closeDialog(): void{
    this.dialogRef.close(
      {
        event: 'ยกเลิก'
      }
    );
  }

}
