// import { of, throwError, Observable } from 'rxjs';
// import { ComponentFixture, inject, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClientModule } from '@angular/common/http';

// import { HomeComponent } from './home.component';
// import { HomeService } from './shared/home.service';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;
//   let mockService: jasmine.SpyObj<HomeService>;
//   let mockDataCountUser = {
//     User_ID: '3'
//   }
//   // mockDataService = jasmine.createSpyObj(DataService.Name, {'GetEmployees': of(EMPLOYEES)});

//   beforeEach(async () => {
//     const mockServiceSpyObj = jasmine.createSpyObj('HomeService', ["getCountUser", "getCountStudent", "getCountTeacher", "getCountCourse", "getCountGroup", "getCountSubject", "getCountInstitution", "getCountAddingStudent", "getCountTransferStudent", "getCountAddingTeacher", "getCountSubjectInstitution"]);
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule,],
//       declarations: [HomeComponent],
//       providers: [
//         { provide: HomeService, useValue: mockServiceSpyObj },
//       ],
//     }).compileComponents();

//     mockService = TestBed.get(HomeService)
//   });

//   beforeEach(() => {
//     mockService.getCountUser.and.returnValue(of(mockDataCountUser));
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });

//   // it('should isAailable', () => {
//   //   component.doctor = { status: 'active' }
//   //   spyOn(component, 'getAdding');

//   //   const res = component.isAailable();

//   //   expect(component.getAdding).toHaveBeenCalled();
//   //   expect(res).toBeTrue();
//   // });

//   // it('should isAailable', () => {
//   //   component.doctor = { status: 'inactive' }
//   //   spyOn(component, 'getAdding');

//   //   const res = component.isAailable();

//   //   expect(component.getAdding).toHaveBeenCalled();
//   //   expect(res).toBeFalse();
//   // });

//   it('should getCountUser when homeService return correct result', fakeAsync(() => {
//     // SET UP
//     const countuser = mockDataCountUser;
//     mockService.getCountUser.and.returnValue(countuser);

//     // Actual Test
//     component.getCountUser();

//     tick()

//     // Assertion
//     expect(component.user).toEqual(countuser);
//     // expect(component.isSuccess).toBeTruthy();
//   }));

//   // it('should return first, second, third', () => {
//   //   spyOn(httpClientSpy, 'get').and.returnValue(Observable.of(mockDataCountUser));
//   //   // randomService. <your get method here...>
//   //   randomService.getValue().subscribe((response) =>
//   //     expect(resposne[0].length).toEqual(3);
//   // };
// });
