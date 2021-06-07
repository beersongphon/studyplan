import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStructureComponent } from './report-structure.component';

describe('ReportStructureComponent', () => {
  let component: ReportStructureComponent;
  let fixture: ComponentFixture<ReportStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
