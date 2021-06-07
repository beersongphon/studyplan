import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userlevel } from './userlevel.model';
import { Teacher } from './teacher.model';
import { Institution } from './institution.model';
import { EducationLevel } from './education-level.model';
import { Faculty } from './faculty.model';
import { Brand } from './brand.model';
import { FieldofStudy } from './field-of-study.model';
import { Sec } from './sec.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //กำหนด URL apiGetStudent ที่ต้องการดึงข้อมูลนักศึกษา
  apiGetStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_student.php';
  //กำหนด URL apiUpdateStudent ที่ต้องการแก้ไขข้อมูลนักศึกษา
  apiUpdateStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_student.php';
  //กำหนด URL apiDeleteStudent ที่ต้องการลบข้อมูลนักศึกษา
  apiDeleteStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_student.php';
  //กำหนด URL apiInsertStudent ที่ต้องการเพิ่มข้อมูลนักศึกษา
  apiInsertStudent = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_student.php';

  //กำหนด URL apiInsertUser ที่ต้องการเพิ่มข้อมูลผู้ใช้
  apiInsertUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_insert_user_student.php';
  //กำหนด URL apiUpdateUser ที่ต้องการแก้ไขข้อมูลผู้ใช้
  apiUpdateUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_edit_user_student.php';
  //กำหนด URL apiDeleteUser ที่ต้องการลบข้อมูลผู้ใช้
  apiDeleteUser = 'http://web.rmutp.ac.th/bus/studyplan/api/api_delete_user.php';

  //กำหนด URL apiGetUserlevel ที่ต้องการดึงข้อมูลระดับผู้ใช้
  apiGetUserlevel = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_userlevel.php';

  //กำหนด URL apiGetInstitution ที่ต้องการดึงข้อมูลสถาบันเดิม
  apiGetInstitution = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_institution_id.php';

  //กำหนด URL apiGetTeacher ที่ต้องการดึงข้อมูลอาจารย์
  apiGetTeacher = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_teacher_id.php';

  //กำหนด URL apiGetEducationLevel ที่ต้องการดึงข้อมูลระดับการศึกษา
  apiGetEducationLevel = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_education_level_id.php';

  //กำหนด URL apiGetFaculty ที่ต้องการดึงข้อมูลคณะ
  apiGetFaculty = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_faculty_id.php';

  //กำหนด URL apiGetBrand ที่ต้องการดึงข้อมูลสาขาวิชา
  apiGetBrand = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_brand_id.php';

  //กำหนด URL apiGetFieldofStudy ที่ต้องการดึงข้อมูลแขวงวิชา
  apiGetFieldofStudy = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_field_of_study_id.php';

  //กำหนด URL apiGetSec ที่ต้องการดึงข้อมูลกลุ่ม
  apiGetSec = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_sec_id.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลสถาบันเดิม
  getInstitution(): Observable<Institution[]>{
    return this.http.get<Institution[]>(this.apiGetInstitution);
  }

  //สร้าง function สำหรับเรียกข้อมูลอาจารย์
  getTeacher(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiGetTeacher);
  }

  //สร้าง function สำหรับเรียกข้อมูลระดับการศึกษา
  getEducationLevel(): Observable<EducationLevel[]>{
    return this.http.get<EducationLevel[]>(this.apiGetEducationLevel);
  }

  //สร้าง function สำหรับเรียกข้อมูลคณะ
  getFaculty(): Observable<Faculty[]>{
    return this.http.get<Faculty[]>(this.apiGetFaculty);
  }

  //สร้าง function สำหรับเรียกข้อมูลสาขาวิชา
  getBrand(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.apiGetBrand);
  }

  //สร้าง function สำหรับเรียกข้อมูลแขวงวิชา
  getFieldofStudy(): Observable<FieldofStudy[]>{
    return this.http.get<FieldofStudy[]>(this.apiGetFieldofStudy);
  }

  //สร้าง function สำหรับเรียกข้อมูลกลุ่ม
  getSec(): Observable<Sec[]>{
    return this.http.get<Sec[]>(this.apiGetSec);
  }

  //สร้าง function สำหรับเพิ่มข้อมูลผู้ใช้
  insertUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertUser, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลผู้ใช้
  updateUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateUser, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลผู้ใช้
  deleteUser(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteUser, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลระดับผู้ใช้
  getUserlevel(): Observable<Userlevel[]>{
    return this.http.get<Userlevel[]>(this.apiGetUserlevel);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลนักศึกษา
  getStudents(): Observable<any[]>{
    return this.http.get<any>(this.apiGetStudent);
  }

  //สร้าง function สำหรับเรียกดูข้อมูลนักศึกษาทั้งหมด
  getStudent(formValue: any): Observable<any[]>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiGetStudent, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับเพิ่มข้อมูลนักศึกษา
  insertStudent(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiInsertStudent, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับแก้ไขข้อมูลนักศึกษา
  updateStudent(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUpdateStudent, formValue, { headers: apiHeader });
  }

  //สร้าง function สำหรับลบข้อมูลนักศึกษา
  deleteStudent(formValue: any): Observable<any>{
    const apiHeader = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiDeleteStudent, formValue, { headers: apiHeader });
  }
}
