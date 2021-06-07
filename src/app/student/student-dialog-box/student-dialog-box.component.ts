//dialog-box.component.ts
import { Component, Inject, Optional, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StudentService } from './../shared/student.service';

export interface StudentsData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-student-dialog-box',
  templateUrl: './student-dialog-box.component.html',
  styleUrls: ['./student-dialog-box.component.css']
})
export class StudentDialogBoxComponent implements OnInit, OnDestroy {

  sub: Subscription;

  educationlevel = [];
  faculty = [];
  brand = [];
  fieldofstudy = [];
  sec = [];

  teacher = [];
  institution = [];
  userlevel = [];

  action: string;
  local_data: any;

  constructor(private studentService: StudentService,
    public dialogRef: MatDialogRef<StudentDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: StudentsData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
    this.getSec();
    this.getFieldofStudy();
    this.getBrand();
    this.getFaculty();
    this.getEducationLevel();
    this.getTeacher();
    this.getInstitution();
    this.getUserlevel();
  }

  getUserlevel(): void{
    this.sub = this.studentService.getUserlevel().subscribe(
      (userlevels) => {
        this.userlevel = this.userlevel.concat(userlevels);
      }
    );
  }

  getInstitution(): void{
    this.sub = this.studentService.getInstitution().subscribe(
      (institutions) => {
        this.institution = this.institution.concat(institutions);
      }
    );
  }

  getTeacher(): void{
    this.sub = this.studentService.getTeacher().subscribe(
      (teachers) => {
        this.teacher = this.teacher.concat(teachers);
      }
    );
  }

  getEducationLevel(): void{
    this.sub = this.studentService.getEducationLevel().subscribe(
      (educationlevels) => {
        this.educationlevel = this.educationlevel.concat(educationlevels);
      }
    );
  }

  getFaculty(): void{
    this.sub = this.studentService.getFaculty().subscribe(
      (facultys) => {
        this.faculty = this.faculty.concat(facultys);
      }
    );
  }

  getBrand(): void{
    this.sub = this.studentService.getBrand().subscribe(
      (brands) => {
        this.brand = this.brand.concat(brands);
      }
    );
  }

  getFieldofStudy(): void{
    this.sub = this.studentService.getFieldofStudy().subscribe(
      (fieldofstudys) => {
        this.fieldofstudy = this.fieldofstudy.concat(fieldofstudys);
      }
    );
  }

  getSec(): void{
    this.sub = this.studentService.getSec().subscribe(
      (secs) => {
        this.sec = this.sec.concat(secs);
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
