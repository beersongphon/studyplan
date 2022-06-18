
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
// import { CoreModule } from '../../core.module';
// import { FeaturesModule } from '../../../features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './../shared/api.service';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser'
import { by } from 'protractor';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let apiService: ApiService;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // CoreModule,
        // FeaturesModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [LoginComponent],
      providers: [ApiService],
    });
    // fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // component.ngOnInit();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set submitted to true', async() => {
    component.login();
    expect(component.login).toBeTruthy();

  });

  it('Should call the OnSubmit method', () => {
    fakeAsync(() => {
      fixture.detectChanges();
      spyOn(component, 'login');
      el = fixture.debugElement.query(By.css('form')).nativeElement;
      el.click();
      expect(component.login).toHaveBeenCalledTimes(0);
    })
  });

  it('Form should be invalid', async () => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Form should be valid', async () => {
    component.loginForm.controls['email'].setValue('admin@rmutp.ac.th');
    component.loginForm.controls['password'].setValue('admin1234');
    expect(component.loginForm.valid).toBeTruthy();
  });

  // it('should call auth login method', async () => {
  //   let loginElement: DebugElement;
  //   const debugElement = fixture.debugElement;
  //   let apiService = debugElement.injector.get(ApiService);
  //   let loginSpy = spyOn(apiService, 'login').and.callThrough();
  //   loginElement = fixture.debugElement.query(By.css('form'));
  //   // to set values
  //   component.loginForm.controls['email'].setValue('admin@rmutp.ac.th');
  //   component.loginForm.controls['password'].setValue('admin1234');
  //   loginElement.triggerEventHandler('ngSubmit', null);
  //   expect(loginSpy).toHaveBeenCalledTimes(1); // check that service is called once
  // })

});


// let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
//       declarations: [LoginComponent],
//       providers: [ApiService],
//     });
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     component.ngOnInit();
//   });

//   it('should call auth login method', async(() => {
//     let loginElement: DebugElement;
//     const debugElement = fixture.debugElement;
//     let authService = debugElement.injector.get(ApiService);
//     let loginSpy = spyOn(authService , 'login').and.callThrough();
//     loginElement = fixture.debugElement.query(By.css('form'));
//     // to set values
//     component.loginForm.controls['email'].setValue('admin@rmutp.ac.th');
//     component.loginForm.controls['password'].setValue('admin1234');
//     loginElement.triggerEventHandler('ngSubmit', null);
//     expect(loginSpy).toHaveBeenCalledTimes(1); // check that service is called once
//    }))
