import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnameTransferComponent } from './listname-transfer.component';

describe('ListnameTransferComponent', () => {
  let component: ListnameTransferComponent;
  let fixture: ComponentFixture<ListnameTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnameTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnameTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
