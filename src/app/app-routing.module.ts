import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { SubjectGroupComponent } from './subject-group/subject-group.component';
import { SubjectComponent } from './subject/subject.component';
import { InstitutionComponent } from './institution/institution.component';
import { StructuresComponent } from './structures/structures.component';
import { StructureComponent } from './structure/structure.component';
import { ReportStructureComponent } from './report-structure/report-structure.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransfersComponent } from './transfers/transfers.component';
import { StudentAddingComponent } from './student-adding/student-adding.component';
import { TeacherAddingComponent } from './teacher-adding/teacher-adding.component';
import { ReportTransferComponent } from './report-transfer/report-transfer.component';
import { ReportAddingComponent } from './report-adding/report-adding.component';
import { ReportTransfersComponent } from './report-transfers/report-transfers.component';

import { ReportTransferSecComponent } from './report-transfer-sec/report-transfer-sec.component';
import { SubjectInstitutionComponent } from './subject-institution/subject-institution.component';
import { AddingComponent } from './adding/adding.component';
import { AddingsComponent } from './addings/addings.component';
import { ListnameTransferComponent } from './listname-transfer/listname-transfer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/auth.guard';

export const URL = {
  login: "login",
  home:"home",
  report: "report",
  student: "student",
  teacher: "teacher",
  course: "course",
  subject_group: "subject-group",
  subject: "subject",
  institution: "institution",
  structures: "structures",
  structure: "structure",
  transfer: "transfer",
  transfers: "transfers",
  subject_institution: "subject-institution",
  student_adding: "student-adding",
  teacher_adding: "teacher-adding",
  report_transfer: "report-transfer",
  adding: "adding",
  addings: "addings",
  report_transfers: "report-transfers",
  report_transfer_sec: "report-transfer-sec",
  listname_transfer: "listname-transfer"
}

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: URL.login, component: LoginComponent },
  { path: URL.home, component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: URL.report,
    loadChildren: () => import('./report/report.module').then(r => r.ReportModule),
    canActivate: [AuthGuard]
  },
  { path: URL.student, component: StudentComponent, canActivate: [AuthGuard] },
  { path: URL.teacher, component: TeacherComponent, canActivate: [AuthGuard] },
  { path: URL.course, component: CourseComponent, canActivate: [AuthGuard] },
  { path: URL.subject_group, component: SubjectGroupComponent, canActivate: [AuthGuard] },
  { path: URL.subject, component: SubjectComponent, canActivate: [AuthGuard] },
  { path: URL.institution, component: InstitutionComponent, canActivate: [AuthGuard] },
  { path: URL.structures, component: StructuresComponent, canActivate: [AuthGuard] },
  { path: URL.structure, component: StructureComponent, canActivate: [AuthGuard] },
  { path: URL.structure+'/:id/:title', component: ReportStructureComponent, canActivate: [AuthGuard] },
  { path: URL.transfer, component: TransferComponent, canActivate: [AuthGuard] },
  { path: URL.transfers, component: TransfersComponent, canActivate: [AuthGuard] },
  { path: URL.subject_institution, component: SubjectInstitutionComponent, canActivate: [AuthGuard] },
  { path: URL.student_adding, component: StudentAddingComponent, canActivate: [AuthGuard] },
  { path: URL.teacher_adding, component: TeacherAddingComponent, canActivate: [AuthGuard] },
  { path: URL.report_transfer, component: ReportTransferComponent, canActivate: [AuthGuard] },
  { path: URL.adding, component: AddingComponent, canActivate: [AuthGuard] },
  { path: URL.addings, component: AddingsComponent, canActivate: [AuthGuard] },
  { path: URL.adding+'/:id/:title', component: ReportAddingComponent, canActivate: [AuthGuard] },
  { path: URL.report_transfers, component: ReportTransfersComponent, canActivate: [AuthGuard] },
  { path: URL.report_transfer_sec, component: ReportTransferSecComponent, canActivate: [AuthGuard] },
  { path: URL.listname_transfer+'/:id/:title', component: ListnameTransferComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
