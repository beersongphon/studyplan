import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLogin = false;

  //โลโก้
  logo = './assets/image/IS.png';
  //ความกว้างของโลโก้
  logoWidth = 72;
  //ความสูงของโลโก้
  logoHeight = 72;

  //ใน constructor กำหนดให้ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน ApiService
  constructor(private title: Title,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('เข้าสู่ระบบ');
  }

  //เข้าสู่ระบบ
  login(angForm1: { value: { email: any; password: any; }; }) {
    this.apiService.userlogin(angForm1.value.email, angForm1.value.password).pipe(first()).subscribe(
      (data) => {
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบเรียบร้อย',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/home';
            this.router.navigate([redirect]);
          }
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Email หรือ Password ไม่ถูกต้อง',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(error)
      }
    );
  }

  //รับค่า email
  get email() {
    return this.loginForm.get('email');
  }

  //รับค่า password
  get password() {
    return this.loginForm.get('password');
  }
}

