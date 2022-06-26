// import { of, throwError } from 'rxjs';
// import { ComponentFixture, inject, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClientModule } from '@angular/common/http';

// import { AddingsComponent } from './addings.component';
// import { AddingsService } from './shared/addings.service';

// describe('AddingsComponent', () => {
//   let component: AddingsComponent;
//   let fixture: ComponentFixture<AddingsComponent>;
//   let mockService: jasmine.SpyObj<AddingsService>;
//   let mockDataAddings = [{
//     Add_With_ID: "38",
//     Add_Withdraw: "เพิ่มรายวิชา",
//     Date: "5-5-2021",
//     Instructor: "fh",
//     Status: "อนุมัติ",
//     Student_ID: "076260305143-9",
//     Student_Name: "นายทรงพล คุ้มคำ",
//     Subject_ID: "GE2500101",
//     Subject_Name: "พลศึกษา",
//     Teacher_ID: "4",
//     Teacher_Name: "อาจารย์ปิยพันธ์ สุวรรณเวช",
//     Term: "2",
//     Year_ID: "2563",
//     Year_Name: "2563"
//   }]
//   // mockDataService = jasmine.createSpyObj(DataService.Name, {'GetEmployees': of(EMPLOYEES)});

//   beforeEach(async () => {
//     const mockServiceSpyObj = jasmine.createSpyObj('AddingsService', ["getAdding", "getAddings"]);
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule,],
//       declarations: [AddingsComponent],
//       providers: [
//         { provide: AddingsService, useValue: mockServiceSpyObj },
//       ],
//     }).compileComponents();

//     mockService = TestBed.get(AddingsService)
//   });

//   beforeEach(() => {
//     mockService.getAdding.and.returnValue(of(mockDataAddings));
//     fixture = TestBed.createComponent(AddingsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should getAdding when addingsService return correct result', fakeAsync(() => {
//   //   // SET UP
//   //   const addings = mockDataAddings;
//   //   mockService.getAddings.and.returnValue(of(addings));

//   //   // Actual Test
//   //   component.getAddings();

//   //   tick()

//   //   // Assertion
//   //   expect(component.addings).toEqual(addings);
//   //   // expect(component.isSuccess).toBeTruthy();
//   // }));
// });
