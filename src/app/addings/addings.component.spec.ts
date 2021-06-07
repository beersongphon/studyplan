import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingsComponent } from './addings.component';

describe('AddingsComponent', () => {
  let component: AddingsComponent;
  let fixture: ComponentFixture<AddingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
