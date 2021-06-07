import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Student } from './student.model';
import { Teacher } from './teacher.model';
import { Course } from './course.model';
import { SubjectGroup } from './subject-group.model';
import { Subject } from './subject.model';
import { Institution } from './institution.model';
import { Adding } from './adding.model';
import { Transfer } from './transfer.model';
import { Addings } from './adding.model';
import { SubjectInstitution } from './subjectinstitution.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //กำหนด URL apiCountUser ที่ต้องการดึงจำนวนข้อมูลผู้ใช้ทั้งหมด
  apiCountUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_user.php';
  //กำหนด URL apiCountStudent ที่ต้องการดึงจำนวนข้อมูลนักศึกษาทั้งหมด
  apiCountStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_student.php';
  //กำหนด URL apiCountTeacher ที่ต้องการดึงจำนวนข้อมูลอาจารย์ทั้งหมด
  apiCountTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_teacher.php';
  //กำหนด URL apiCountCourse ที่ต้องการดึงจำนวนข้อมูลหลักสูตรทั้งหมด
  apiCountCourse = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_course.php';
  //กำหนด URL apiCountGroup ที่ต้องการดึงจำนวนข้อมูลกลุ่มวิชาทั้งหมด
  apiCountGroup = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_subject_group.php';
  //กำหนด URL apiCountSubject ที่ต้องการดึงจำนวนข้อมูลรายวิชาทั้งหมด
  apiCountSubject = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_subject.php';
  //กำหนด URL apiCountInstitution ที่ต้องการดึงจำนวนข้อมูลสถาบันเดิมทั้งหมด
  apiCountInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_institution.php';
  //กำหนด URL apiCountAdding ที่ต้องการดึงจำนวนข้อมูลการเพิ่มถอนทั้งหมดสำหรับนักศึกษา
  apiCountAddingStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_adding_student.php';
  //กำหนด URL apiCountTransferStudent ที่ต้องการดึงจำนวนข้อมูลการเทียบโอนสำหรับนักศึกษา
  apiCountTransferStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_transfer_student.php';
  //กำหนด URL apiCountAdding ที่ต้องการดึงจำนวนข้อมูลการเพิ่มถอนทั้งหมดสำหรับอาจารย์ที่ปรึกษา
  apiCountAddingTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_adding_teacher.php';
  //กำหนด URL apiCountSubjectInstitution ที่ต้องการดึงจำนวนข้อมูลรายวิชาจากสถาบันเดิมทั้งหมด
  apiCountSubjectInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_count_subject_of_institution.php';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลผู้ใช้ทั้งหมด
  getCountUser(): Observable<User[]>{
    return this.http.get<User[]>(this.apiCountUser);
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลผู้ใช้ทั้งหมด
  getCountStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiCountStudent);
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลผู้ใช้ทั้งหมด
  getCountTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiCountTeacher);
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลหลักสูตรทั้งหมด
  getCountCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiCountCourse);
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลกลุ่มวิชาทั้งหมด
  getCountGroup(): Observable<SubjectGroup[]>{
    return this.http.get<SubjectGroup[]>(this.apiCountGroup);
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลรายวิชาทั้งหมด
  getCountSubject(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiCountSubject);
  }

  getCountInstitution(): Observable<Institution[]>{
    return this.http.get<Institution[]>(this.apiCountInstitution);
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเพิ่มถอนทั้งหมด
  getCountAddingStudent(): Observable<Adding[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Adding[]>(this.apiCountAddingStudent, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเทียบโอนทั้งหมดสำหรับนักศึกษา
  getCountTransferStudent(): Observable<Transfer[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Transfer[]>(this.apiCountTransferStudent, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลการเพิ่มถอนทั้งหมด
  getCountAddingTeacher(): Observable<Addings[]>{
    const apiHeader = { 'Authorization': this.getToken() };
    return this.http.get<Addings[]>(this.apiCountAddingTeacher, { headers: apiHeader });
  }

  //สร้าง function สำหรับเรียกจำนวนข้อมูลรายวิชาจากสถาบันเดิมทั้งหมด
  getCountSubjectInstitution(): Observable<SubjectInstitution[]>{
    return this.http.get<SubjectInstitution[]>(this.apiCountSubjectInstitution);
  }
}
