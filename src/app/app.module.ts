import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NgxPrintModule } from 'ngx-print';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatLineModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentDialogBoxComponent } from './student/student-dialog-box/student-dialog-box.component';
import { StudentDeleteDialogBoxComponent } from './student/student-delete-dialog-box/student-delete-dialog-box.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDialogBoxComponent } from './teacher/teacher-dialog-box/teacher-dialog-box.component';
import { TeacherDeleteDialogBoxComponent } from './teacher/teacher-delete-dialog-box/teacher-delete-dialog-box.component';
import { CourseComponent } from './course/course.component';
import { CourseDialogBoxComponent } from './course/course-dialog-box/course-dialog-box.component';
import { CourseDeleteDialogBoxComponent } from './course/course-delete-dialog-box/course-delete-dialog-box.component';
import { SubjectGroupComponent } from './subject-group/subject-group.component';
import { SubjectGroupDialogBoxComponent } from './subject-group/subject-group-dialog-box/subject-group-dialog-box.component';
import { SubjectGroupDeleteDialogBoxComponent } from './subject-group/subject-group-delete-dialog-box/subject-group-delete-dialog-box.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectDialogBoxComponent } from './subject/subject-dialog-box/subject-dialog-box.component';
import { SubjectDeleteDialogBoxComponent } from './subject/subject-delete-dialog-box/subject-delete-dialog-box.component';
import { InstitutionComponent } from './institution/institution.component';
import { InstitutionDialogBoxComponent } from './institution/institution-dialog-box/institution-dialog-box.component';
import { InstitutionDeleteDialogBoxComponent } from './institution/institution-delete-dialog-box/institution-delete-dialog-box.component';
import { StructuresComponent } from './structures/structures.component';
import { StructuresDialogBoxComponent } from './structures/structures-dialog-box/structures-dialog-box.component';
import { StructuresDeleteDialogBoxComponent } from './structures/structures-delete-dialog-box/structures-delete-dialog-box.component';
import { TransfersComponent } from './transfers/transfers.component';
import { StudentAddingComponent } from './student-adding/student-adding.component';
import { StudentAddingDialogBoxComponent } from './student-adding/student-adding-dialog-box/student-adding-dialog-box.component';
import { StudentAddingDeleteDialogBoxComponent } from './student-adding/student-adding-delete-dialog-box/student-adding-delete-dialog-box.component';
import { SubjectInstitutionComponent } from './subject-institution/subject-institution.component';
import { SubjectInstitutionDialogBoxComponent } from './subject-institution/subject-institution-dialog-box/subject-institution-dialog-box.component';
import { SubjectInstitutionDeleteDialogBoxComponent } from './subject-institution/subject-institution-delete-dialog-box/subject-institution-delete-dialog-box.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferDialogBoxComponent } from './transfer/transfer-dialog-box/transfer-dialog-box.component';
import { TransferDeleteDialogBoxComponent } from './transfer/transfer-delete-dialog-box/transfer-delete-dialog-box.component';
import { TeacherAddingComponent } from './teacher-adding/teacher-adding.component';
import { TeacherAddingDialogBoxComponent } from './teacher-adding/teacher-adding-dialog-box/teacher-adding-dialog-box.component';
import { AddingComponent } from './adding/adding.component';
import { AddingsComponent } from './addings/addings.component';
import { ReportTransferComponent } from './report-transfer/report-transfer.component';
import { ReportAddingComponent } from './report-adding/report-adding.component';
import { ReportTransfersComponent } from './report-transfers/report-transfers.component';
import { StructureComponent } from './structure/structure.component';
import { ReportStructureComponent } from './report-structure/report-structure.component';
import { ReportTransferSecComponent } from './report-transfer-sec/report-transfer-sec.component';
import { ListnameTransferComponent } from './listname-transfer/listname-transfer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutDialogComponent } from './checkout/checkout-dialog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdtobePipe } from './shared/adtobe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    StudentComponent,
    StudentDialogBoxComponent,
    StudentDeleteDialogBoxComponent,
    TeacherComponent,
    TeacherDialogBoxComponent,
    TeacherDeleteDialogBoxComponent,
    CourseComponent,
    CourseDialogBoxComponent,
    CourseDeleteDialogBoxComponent,
    SubjectGroupComponent,
    SubjectGroupDialogBoxComponent,
    SubjectGroupDeleteDialogBoxComponent,
    SubjectComponent,
    SubjectDialogBoxComponent,
    SubjectDeleteDialogBoxComponent,
    InstitutionComponent,
    InstitutionDialogBoxComponent,
    InstitutionDeleteDialogBoxComponent,
    StructuresComponent,
    StructuresDialogBoxComponent,
    StructuresDeleteDialogBoxComponent,
    TransfersComponent,
    StudentAddingComponent,
    StudentAddingDialogBoxComponent,
    StudentAddingDeleteDialogBoxComponent,
    SubjectInstitutionComponent,
    SubjectInstitutionDialogBoxComponent,
    SubjectInstitutionDeleteDialogBoxComponent,
    TransferComponent,
    TransferDialogBoxComponent,
    TransferDeleteDialogBoxComponent,
    TeacherAddingComponent,
    TeacherAddingDialogBoxComponent,
    ReportTransferComponent,
    ReportAddingComponent,
    ReportTransfersComponent,
    StructureComponent,
    ReportStructureComponent,
    ReportTransferSecComponent,
    AddingComponent,
    AddingsComponent,
    ListnameTransferComponent,
    CartComponent,
    CheckoutDialogComponent,
    PagenotfoundComponent,
    AdtobePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    NgxPrintModule,
    CdkTreeModule,
    OverlayModule,
    PortalModule,
    MatLineModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    NgbModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'th-TH'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
