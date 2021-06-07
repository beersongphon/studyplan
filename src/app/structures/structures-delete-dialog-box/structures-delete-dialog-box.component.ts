import { Component, Inject, Optional, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SubjectsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-structures-delete-dialog-box',
  templateUrl: './structures-delete-dialog-box.component.html',
  styleUrls: ['./structures-delete-dialog-box.component.css']
})
export class StructuresDeleteDialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<StructuresDeleteDialogBoxComponent>,
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
