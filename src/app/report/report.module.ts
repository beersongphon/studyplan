import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ReportTransferComponent } from './report-transfer/report-transfer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ReportTransferComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
