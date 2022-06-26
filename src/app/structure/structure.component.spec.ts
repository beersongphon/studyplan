import { of, throwError } from 'rxjs';
import { ComponentFixture, inject, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { StructureComponent } from './structure.component';
import { StructureService } from './shared/structure.service';

describe('StructureComponent', () => {
  let component: StructureComponent;
  let fixture: ComponentFixture<StructureComponent>;
  let mockService: jasmine.SpyObj<StructureService>;
  let mockDataStructure = [
    {
      Course_ID: "6128030901",
      Course_Name: "บริหารธุรกิจบัณฑิต สาขาวิชาระบบสารสนเทศ-พัฒนาซอฟต์แวร์",
      Course_Allcredit: 133
    }
  ]
  // mockDataService = jasmine.createSpyObj(DataService.Name, {'GetEmployees': of(EMPLOYEES)});

  beforeEach(async () => {
    const mockServiceSpyObj = jasmine.createSpyObj('StructureService', ["getStructure", "getStructureContent"]);
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      declarations: [StructureComponent],
      providers: [
        { provide: StructureService, useValue: mockServiceSpyObj },
      ],
    }).compileComponents();

    mockService = TestBed.get(StructureService)
  });

  beforeEach(() => {
    mockService.getStructure.and.returnValue(of(mockDataStructure));
    fixture = TestBed.createComponent(StructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should getStructure when structureService return correct result', fakeAsync(() => {
    // SET UP
    const structure = mockDataStructure;
    mockService.getStructure.and.returnValue(of(structure));

    // Actual Test
    component.getStructure();

    tick()

    // Assertion
    expect(component.structure).toEqual(structure);
    // expect(component.isSuccess).toBeTruthy();
  }));
});
