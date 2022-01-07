import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

import { ReportRoutingModule } from './report-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ReportTransferComponent } from './report-transfer/report-transfer.component';
import { ReportTransfersComponent } from './report-transfers/report-transfers.component';
import { ReportTransferSecComponent } from './report-transfer-sec/report-transfer-sec.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ReportTransferComponent,
    ReportTransfersComponent,
    ReportTransferSecComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgxPrintModule
  ]
})
export class ReportModule { }
