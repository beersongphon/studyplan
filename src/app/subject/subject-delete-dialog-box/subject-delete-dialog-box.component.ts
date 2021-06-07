import { Component, Inject, Optional, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SubjectService } from '../shared/subject.service';

export interface SubjectsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-subject-delete-dialog-box',
  templateUrl: './subject-delete-dialog-box.component.html',
  styleUrls: ['./subject-delete-dialog-box.component.css']
})
export class SubjectDeleteDialogBoxComponent  implements OnInit, OnDestroy {

  sub: Subscription;

  group = [];
  main = [];
  course = [];

  action: string;
  local_data: any;

  constructor(private subjectService: SubjectService,
    public dialogRef: MatDialogRef<SubjectDeleteDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SubjectsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }


  ngOnInit(): void {
    this.getGroup();
    this.getMain();
    this.getCourse();
  }

  getGroup(): void{
    this.sub = this.subjectService.getGroup().subscribe(
      (groups) => {
        this.group = this.group.concat(groups);
      }
    );
  }

  getMain(): void{
    this.sub = this.subjectService.getMain().subscribe(
      (mains) => {
        this.main = this.main.concat(mains);
      }
    );
  }

  getCourse(): void{
    this.sub = this.subjectService.getCourse().subscribe(
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
