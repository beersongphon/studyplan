import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddingComponent } from './student-adding.component';

describe('StudentAddingComponent', () => {
  let component: StudentAddingComponent;
  let fixture: ComponentFixture<StudentAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
