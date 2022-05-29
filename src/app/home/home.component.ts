import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './shared/home.service';
import { ApiService } from './../shared/api.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { User, Student, Teacher, Course, SubjectGroup, Subject, Institution, Adding, Transfer, Addings, SubjectInstitution } from './shared/home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  loginbtn: boolean;
  logoutbtn: boolean;

  //สร้างตัวแปรสำหรับเก็บข้อมูลที่ดึงมาจาก API
  user: User;
  student: Student;
  teacher: Teacher;
  course: Course;
  subjectgroup: SubjectGroup;
  subject: Subject;
  institution: Institution;
  adding: Adding;
  transfer: Transfer;
  addings: Addings;
  subjectinstitution: SubjectInstitution;

  sub: Subscription;

  //ใน constructor กำหนดให้ homeService กับ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน HomeService กับ ApiService
  constructor(private title: Title, private apiService: ApiService, private homeService: HomeService) {

  }

  ngOnInit(): void {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('หน้าแรก');
    //เรียก function getCountUser เมื่อ App เริ่มทำงาน
    this.getCountUser();
    //เรียก function getCountStudent เมื่อ App เริ่มทำงาน
    this.getCountStudent();
    //เรียก function getCountTeacher เมื่อ App เริ่มทำงาน
    this.getCountTeacher();
    //เรียก function getCountCourse เมื่อ App เริ่มทำงาน
    this.getCountCourse();
    //เรียก function getCountGroup เมื่อ App เริ่มทำงาน
    this.getCountGroup();
    //เรียก function getCountSubject เมื่อ App เริ่มทำงาน
    this.getCountSubject();
    //เรียก function getCountInstitution เมื่อ App เริ่มทำงาน
    this.getCountInstitution();
    //เรียก function getCountAddingStudent เมื่อ App เริ่มทำงาน
    this.getCountAddingStudent();
    //เรียก function getCountTransferStudent เมื่อ App เริ่มทำงาน
    this.getCountTransferStudent();
    //เรียก function getCountAddingTeacher เมื่อ App เริ่มทำงาน
    this.getCountAddingTeacher();
    //เรียก function getCountSubjectInstitution เมื่อ App เริ่มทำงาน
    this.getCountSubjectInstitution();
  }

  //รับข้อมูลจำนวนผู้ใช้ทั้งหมด
  getCountUser(): void{
    this.sub = this.homeService.getCountUser().subscribe(
      (users) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountUser
        this.user = users;
        console.log(users);
      }
    );
  }

  //รับข้อมูลจำนวนนักศึกษาทั้งหมด
  getCountStudent(): void{
    this.sub = this.homeService.getCountStudent().subscribe(
      (students) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountStudent
        this.student = students;
        console.log(students);
      }
    );
  }

  //รับข้อมูลจำนวนผู้ใช้ทั้งหมด
  getCountTeacher(): void{
    this.sub = this.homeService.getCountTeacher().subscribe(
      (teachers) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountTeacher
        this.teacher = teachers;
        console.log(teachers);
      }
    );
  }

  //รับข้อมูลจำนวนหลักสูตรทั้งหมด
  getCountCourse(): void{
    this.sub = this.homeService.getCountCourse().subscribe(
      (courses) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountCourse
        this.course = courses;
        console.log(courses);
      }
    );
  }

  //รับข้อมูลจำนวนกลุ่มวิชาทั้งหมด
  getCountGroup(): void{
    this.sub = this.homeService.getCountGroup().subscribe(
      (groups) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountGroup
        this.subjectgroup = groups;
        console.log(groups);
      }
    );
  }

  //รับข้อมูลจำนวนรายวิชาทั้งหมด
  getCountSubject(): void{
    this.sub = this.homeService.getCountSubject().subscribe(
      (subjects) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountSubject
        this.subject = subjects;
        console.log(subjects);
      }
    );
  }

  //รับข้อมูลจำนวนสถาบันเดิมทั้งหมด
  getCountInstitution(): void{
    this.sub = this.homeService.getCountInstitution().subscribe(
      (institutions) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountInstitution
        this.institution = institutions;
        console.log(institutions);
      }
    );
  }

  //รับข้อมูลจำนวนเพิ่มถอนทั้งหมด
  getCountAddingStudent(): void{
    this.sub = this.homeService.getCountAddingStudent().subscribe(
      (addings) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountAddingStudent
        this.adding = addings;
        console.log(addings);
      }
    );
  }

  //รับข้อมูลจำนวนวิชาที่เทียบโอนได้
  getCountTransferStudent(): void{
    this.sub = this.homeService.getCountTransferStudent().subscribe(
      (transfers) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountTransferStudent
        this.transfer = transfers;
        console.log(transfers);
      }
    );
  }

  //รับข้อมูลจำนวนเพิ่มถอนทั้งหมด
  getCountAddingTeacher(): void{
    this.sub = this.homeService.getCountAddingTeacher().subscribe(
      (addings) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountAddingTeacher
        this.addings = addings;
        console.log(addings);
      }
    );
  }

  //รับข้อมูลจำนวนรายวิชาจากสถาบันเดิมทั้งหมด
  getCountSubjectInstitution(): void{
    this.sub = this.homeService.getCountSubjectInstitution().subscribe(
      (subjectinstitutions) => {
        //นำข้อมูลที่ได้เก็บไว้ที่ตัวแปร getCountSubjectInstitution
        this.subjectinstitution = subjectinstitutions;
        console.log(subjectinstitutions);
      }
    );
  }

  //จะถูกเรียก component จะถูกทำลายใช้สำหรับการ unsubscribe พวก observable และ event ต่างๆ ที่ subscribed ไว้เพื่อไม่ให้เกิดปัญหา memory leak
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  //แบ่งสิทธิ์สำหรับทุกระดับผู้ใช้
  isLogin() {
    if (this.apiService.isLoggedIn()) {
      return true
    } else {
      return false
    }
  }

  //แบ่งสิทธิ์สำหรับผู้ดูแลระบบ
  isAdmin() {
    if (this.apiService.getUserlevel() == '1') {
      return true
    } else {
      return false
    }
  }

  //แบ่งสิทธิ์สำหรับนักศึกษา
  isStudent() {
    if (this.apiService.getUserlevel() == '2') {
      return true
    } else {
      return false
    }
  }

  //แบ่งสิทธิ์สำหรับอาจารย์ที่ปรึกษา
  isTeacher() {
    if (this.apiService.getUserlevel() == '3') {
      return true
    } else {
      return false
    }
  }

  //แบ่งสิทธิ์สำหรับหัวหน้าสาขาวิชา
  isHeadOfIS() {
    if (this.apiService.getUserlevel() == '4') {
      return true
    } else {
      return false
    }
  }

  isLoout() {
    if (this.apiService.isLoggedIn()) {
      return false
    } else {
      return true
    }
  }

  issLogin() {
    if (this.apiService.isLoggedIn()) {
      return true
    } else {
      return false
    }
  }
}
