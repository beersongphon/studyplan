import { Component, Inject, Optional, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GroupMainService } from './../shared/group-main.service';
import { CourseService } from './../shared/course.service';

export interface GroupsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-subject-group-delete-dialog-box',
  templateUrl: './subject-group-delete-dialog-box.component.html',
  styleUrls: ['./subject-group-delete-dialog-box.component.css']
})
export class SubjectGroupDeleteDialogBoxComponent implements OnInit, OnDestroy {
  sub: Subscription;
  main = [];
  course = [];

  action: string;
  local_data: any;

  constructor(private courseService: CourseService,
    private groupmainService: GroupMainService,
    public dialogRef: MatDialogRef<SubjectGroupDeleteDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: GroupsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
    this.getMain();
    this.getCourse();
  }

  getMain(): void{
    this.sub = this.groupmainService.getMain().subscribe(
      (mains) => {
        this.main = this.main.concat(mains);
      }
    );
  }

  getCourse(): void{
    this.sub = this.courseService.getCourse().subscribe(
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
