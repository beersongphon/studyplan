import { TestBed } from '@angular/core/testing';

import { ReportTransferSecService } from './report-transfer-sec.service';

describe('ReportTransferSecService', () => {
  let service: ReportTransferSecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportTransferSecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
