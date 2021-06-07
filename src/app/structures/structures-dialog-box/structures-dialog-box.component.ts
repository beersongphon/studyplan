import { Component, Inject, Optional, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StructuresService } from '../shared/structures.service';

export interface SubjectsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-structures-dialog-box',
  templateUrl: './structures-dialog-box.component.html',
  styleUrls: ['./structures-dialog-box.component.css']
})
export class StructuresDialogBoxComponent implements OnInit, OnDestroy {

  sub: Subscription;

  subject = [];
  group = [];
  main = [];
  course = [];

  action: string;
  local_data: any;

  constructor(private structuresService: StructuresService,
    public dialogRef: MatDialogRef<StructuresDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SubjectsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }


  ngOnInit(): void {
    this.getSubject();
    this.getGroup();
    this.getMain();
    this.getCourse();
  }

  getSubject(): void{
    this.sub = this.structuresService.getSubject().subscribe(
      (subjects) => {
        this.subject = this.subject.concat(subjects);
      }
    );
  }

  getGroup(): void{
    this.sub = this.structuresService.getGroup().subscribe(
      (groups) => {
        this.group = this.group.concat(groups);
      }
    );
  }

  getMain(): void{
    this.sub = this.structuresService.getMain().subscribe(
      (mains) => {
        this.main = this.main.concat(mains);
      }
    );
  }

  getCourse(): void{
    this.sub = this.structuresService.getCourse().subscribe(
      (courses) => {
        this.course = this.course.concat(courses);
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
