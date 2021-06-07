import { TestBed } from '@angular/core/testing';

import { ReportTransfersService } from './report-transfers.service';

describe('ReportTransfersService', () => {
  let service: ReportTransfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportTransfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
