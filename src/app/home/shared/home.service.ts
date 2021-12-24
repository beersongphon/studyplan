import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Student, Teacher, Course, SubjectGroup, Subject, Institution, Adding, Transfer, Addings, SubjectInstitution } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //กำหนด URL apiUrl ที่ต้องการดึงข้อมูลอื่นๆ
  apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลผู้ใช้ทั้งหมด
  getCountUser(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl + '/api_count_user.php');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลผู้ใช้ทั้งหมด
  getCountStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl + '/api_count_student.php');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลผู้ใช้ทั้งหมด
  getCountTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl + '/api_count_teacher.php');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลหลักสูตรทั้งหมด
  getCountCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl + '/api_count_course.php');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลกลุ่มวิชาทั้งหมด
  getCountGroup(): Observable<SubjectGroup[]>{
    return this.http.get<SubjectGroup[]>(this.apiUrl + '/api_count_subject_group.php');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลรายวิชาทั้งหมด
  getCountSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiUrl + '/api_count_subject.php');
  }

  getCountInstitution(): Observable<Institution[]>{
    return this.http.get<Institution[]>(this.apiUrl + '/api_count_institution.php');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเพิ่มถอนทั้งหมด
  getCountAddingStudent(): Observable<Adding[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Adding[]>(this.apiUrl + '/api_count_adding_student.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนทั้งหมดสำหรับนักศึกษา
  getCountTransferStudent(): Observable<Transfer[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Transfer[]>(this.apiUrl + '/api_count_transfer_student.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเพิ่มถอนทั้งหมด
  getCountAddingTeacher(): Observable<Addings[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Addings[]>(this.apiUrl + '/api_count_adding_teacher.php', { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลรายวิชาจากสถาบันเดิมทั้งหมด
  getCountSubjectInstitution(): Observable<SubjectInstitution[]>{
    return this.http.get<SubjectInstitution[]>(this.apiUrl + '/api_count_subject_of_institution.php');
  }
}
