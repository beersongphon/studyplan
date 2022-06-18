import { of, throwError } from 'rxjs';
import { ComponentFixture, inject, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { AddingComponent } from './adding.component';
import { AddingService } from './shared/adding.service';

describe('AddingComponent', () => {
  let component: AddingComponent;
  let fixture: ComponentFixture<AddingComponent>;
  let mockService: jasmine.SpyObj<AddingService>;
  let mockDataAdding = [{
    Add_With_ID: '1',
    User_ID: '076260305143-9',
    User_Name: 'ทรงพล คุ้มคำ',
    Subject_ID: 'BA2052101' ,
    Subject_Name: 'พื้นฐานคอมพิวเตอร์และเทคโนโลยีสารสนเทศ',
    Date: '2021-05-01',
    Status: 'รออนุมัติ'
  }]
  // mockDataService = jasmine.createSpyObj(DataService.Name, {'GetEmployees': of(EMPLOYEES)});

  beforeEach(async () => {
    const mockServiceSpyObj = jasmine.createSpyObj('AddingService', ['getAdding']);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      declarations: [AddingComponent],
      providers: [
        { provide: AddingService, useValue: mockServiceSpyObj },
      ],
    }).compileComponents();

    mockService = TestBed.get(AddingService)
  });

  beforeEach(() => {
    mockService.getAdding.and.returnValue(of(mockDataAdding));
    fixture = TestBed.createComponent(AddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should isAailable', () => {
  //   component.doctor = { status: 'active' }
  //   spyOn(component, 'getAdding');

  //   const res = component.isAailable();

  //   expect(component.getAdding).toHaveBeenCalled();
  //   expect(res).toBeTrue();
  // });

  // it('should isAailable', () => {
  //   component.doctor = { status: 'inactive' }
  //   spyOn(component, 'getAdding');

  //   const res = component.isAailable();

  //   expect(component.getAdding).toHaveBeenCalled();
  //   expect(res).toBeFalse();
  // });

  it('should getAdding when addingService return correct result', fakeAsync(() => {
    // SET UP
    const adding = mockDataAdding;
    mockService.getAdding.and.returnValue(of(adding));

    // Actual Test
    component.getAdding();

    tick()

    // Assertion
    expect(component.adding).toEqual(adding);
    // expect(component.isSuccess).toBeTruthy();
  }));

  // it('should getAdding when addingService return error', fakeAsync(() => {
  //   // SET UP
  //   const adding = mockDataAdding;
  //   const errorBody = { message: 'this is an error message'};

  //   mockService.getAdding.and.returnValue(throwError(errorBody));

  //   // Actual Test
  //   component.getAdding();

  //   tick()

  //   // Assertion
  //   expect(component.adding).toEqual(adding);
  //   // expect(component.isSuccess).toBeFalsy();
  // }));

  it('should call print and cancel', () => {
    // spy on print and cancel on window object
    const printSpy = spyOn(window, 'print');
    // const cancelSpy = spyOn(window, 'cancel');

    // call print
    component.printPage();

    // expect print and cancel spy to have been called
    expect(printSpy).toHaveBeenCalled();
    // expect(cancelSpy).toHaveBeenCalled();
  });
});
