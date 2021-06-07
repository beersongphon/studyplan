import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Main } from './group-main.model';

@Injectable({
  providedIn: 'root'
})
export class GroupMainService {
  //กำหนด URL apiGetMain ที่ต้องการดึงข้อมูลหมวดวิชา
  apiGetMain = 'http://web.rmutp.ac.th/bus/studyplan/api/api_get_main_id.php';

  constructor(private http: HttpClient) { }

  //สร้าง function สำหรับเรียกข้อมูลหมวดวิชา
  getMain(): Observable<Main[]>{
    return this.http.get<Main[]>(this.apiGetMain);
  }
}
