import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTransferSecComponent } from './report-transfer-sec.component';

describe('ReportTransferSecComponent', () => {
  let component: ReportTransferSecComponent;
  let fixture: ComponentFixture<ReportTransferSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTransferSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTransferSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
