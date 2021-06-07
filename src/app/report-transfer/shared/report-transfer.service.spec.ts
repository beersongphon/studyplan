import { TestBed } from '@angular/core/testing';

import { ReportTransferService } from './report-transfer.service';

describe('ReportTransferService', () => {
  let service: ReportTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
