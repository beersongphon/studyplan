import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
  });
  subLogin: Subscription | undefined;
  isLogin: boolean = false;
  profile: any;

  loginbtn: boolean;
  logoutbtn: boolean;

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

  }

  ngOnInit() {
    //แสดงชื่อแท็บของเว็บไซค์
    this.title.setTitle('เข้าสู่ระบบ');
  }

  //เข้าสู่ระบบ
  login(): void {
    console.log(this.loginForm.value);
    this.subLogin = this.apiService.login(this.loginForm.value).subscribe(
      (token) => {
        // Swal.fire({
        //   title: (token.message),
        //   showConfirmButton: false,
        //   timer: 1500
        // }).then((result) => {
        //   if (result.isDismissed) {
        //     if (token.data) {
        //       localStorage.setItem('token', (token.data.User_ID));
        //       localStorage.setItem('userlevel_id', (token.data.Userlevel_ID));
        //       this.isLogin = true;
        //       const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/home';
        //       this.router.navigate([redirect]);
        //       this.profile = token.data;
        //       this.profile.image = '../../assets/image/user.png';
        //     }
        //   }
        // });
        // admin@rmutp.ac.th
        if (token.data) {
          Swal.fire({
            icon: 'success',
            title: (token.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              // if(token.data.Userlevel_ID == "1") {
              //   const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/home';
              //   this.router.navigate([redirect]);
              //   // this.router.navigate(['/']);
              // } else if(token.data.Userlevel_ID == "2") {
              //   const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/student';
              //   this.router.navigate([redirect]);
              //   // this.router.navigate(['/']);
              // } else if(token.data.Userlevel_ID == "3") {
              //   const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/teacher';
              //   this.router.navigate([redirect]);
              //   // this.router.navigate(['/']);
              // }
              localStorage.setItem('token', (token.data.User_ID));
              localStorage.setItem('userlevel_id', (token.data.Userlevel_ID));
              this.isLogin = true;
              const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/home';
              this.router.navigate([redirect]);
              // this.profile = token.data;
              // this.profile.image = '../../assets/image/user.png';
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: (token.message),
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if (result.isDismissed) {
              window.history.back;
            }
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: (error.name),
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isDismissed) {
            window.history.back;
          }
        });
        // alert(error.name);
      }
    );
  }

  // login(): void {
  //   console.log(this.loginForm.value);
  //   this.subLogin = this.apiService.userlogin(this.loginForm.value).subscribe(
  //     (token) => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'เข้าสู่ระบบเรียบร้อย',
  //         showConfirmButton: false,
  //         timer: 1500
  //       }).then((result) => {
  //         if (result.isDismissed) {
  //           const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/home';
  //           this.router.navigate([redirect]);
  //         }
  //       });
  //     },
  //     (error) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Email หรือ Password ไม่ถูกต้อง',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //       console.log(error)
  //     }
  //   );
  // }

  // login(angForm1: { value: { email: any; password: any; }; }) {
  //   this.apiService.userlogin(angForm1.value.email, angForm1.value.password).pipe(first()).subscribe(
  //     (data) => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'เข้าสู่ระบบเรียบร้อย',
  //         showConfirmButton: false,
  //         timer: 1500
  //       }).then((result) => {
  //         if (result.isDismissed) {
  //           const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/home';
  //           this.router.navigate([redirect]);
  //         }
  //       });
  //     },
  //     (error) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Email หรือ Password ไม่ถูกต้อง',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //       console.log(error)
  //     }
  //   );
  // }

  setToken(data: string, UserLevel_ID: string): void {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('userlevel_id', JSON.stringify(UserLevel_ID));
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

