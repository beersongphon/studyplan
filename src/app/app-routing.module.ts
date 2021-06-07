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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] },
  { path: 'student', component: StudentComponent,
    canActivate: [AuthGuard] },
  { path: 'teacher', component: TeacherComponent,
    canActivate: [AuthGuard] },
  { path: 'course', component: CourseComponent,
    canActivate: [AuthGuard] },
  { path: 'subject-group', component: SubjectGroupComponent,
    canActivate: [AuthGuard] },
  { path: 'subject', component: SubjectComponent,
    canActivate: [AuthGuard] },
  { path: 'institution', component: InstitutionComponent,
    canActivate: [AuthGuard] },
  { path: 'structures', component: StructuresComponent,
    canActivate: [AuthGuard] },
  { path: 'structure', component: StructureComponent,
    canActivate: [AuthGuard] },
  { path: 'structure/:id/:title', component: ReportStructureComponent,
    canActivate: [AuthGuard] },
  { path: 'transfer', component: TransferComponent,
    canActivate: [AuthGuard] },
  { path: 'transfers', component: TransfersComponent,
    canActivate: [AuthGuard] },
  { path: 'subject-institution', component: SubjectInstitutionComponent,
    canActivate: [AuthGuard] },
  { path: 'student-adding', component: StudentAddingComponent,
    canActivate: [AuthGuard] },
  { path: 'teacher-adding', component: TeacherAddingComponent,
    canActivate: [AuthGuard] },
  { path: 'report-transfer', component: ReportTransferComponent,
    canActivate: [AuthGuard] },
  { path: 'adding', component: AddingComponent,
    canActivate: [AuthGuard] },
  { path: 'addings', component: AddingsComponent,
    canActivate: [AuthGuard] },
  { path: 'adding/:id/:title', component: ReportAddingComponent,
    canActivate: [AuthGuard] },
  { path: 'report-transfers', component: ReportTransfersComponent,
    canActivate: [AuthGuard] },
  { path: 'report-transfer-sec', component: ReportTransferSecComponent,
    canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
