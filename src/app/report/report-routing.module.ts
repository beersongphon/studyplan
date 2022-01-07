import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportTransferComponent } from './report-transfer/report-transfer.component';
import { ReportTransfersComponent } from './report-transfers/report-transfers.component';
import { ReportTransferSecComponent } from './report-transfer-sec/report-transfer-sec.component';

const routes: Routes = [
  { path: 'transfer', component: ReportTransferComponent },
  { path: 'transfers', component: ReportTransfersComponent },
  { path: 'transfer-sec', component: ReportTransferSecComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
