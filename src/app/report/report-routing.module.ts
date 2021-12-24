import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportTransferComponent } from './report-transfer/report-transfer.component';

const routes: Routes = [
  { path: 'transfer', component: ReportTransferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
