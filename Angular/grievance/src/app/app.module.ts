import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DepartmentComponent } from './department/department.component';
import { CitizenComponent } from './citizen/citizen.component';
import { LoginComponent } from './commons/login/login.component';
import { LogoutComponent } from './commons/logout/logout.component';
import { HomeComponent } from './commons/home/home.component';
import { AboutComponent } from './commons/about/about.component';
import { ContactComponent } from './commons/contact/contact.component';
import { ErrorComponent } from './commons/error/error.component';
import { CdepartmentComponent } from './commons/cdepartment/cdepartment.component';
import { AdminModule } from './admin/admin.module';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './commons/footer/footer.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { DepartmentHomeComponent } from './department/department-home/department-home.component';
import { SidenavComponent } from './department/sidenav/sidenav.component';
import { ComplainListComponent } from './department/complain-list/complain-list.component';
import { ProfileComponent } from './department/profile/profile.component';
import { ReminderComplainComponent } from './department/reminder-complain/reminder-complain.component';
import { ReportsComponent } from './department/reports/reports.component';
import { TransferComplainComponent } from './department/transfer-complain/transfer-complain.component';
import {MatCardModule} from '@angular/material/card';
import { CsidenavComponent } from './citizen/csidenav/csidenav.component';
import { ChangePasswordComponent } from './department/change-password/change-password.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CitizenComplaintRegisterFormComponent } from './citizen/citizen-complaint-register-form/citizen-complaint-register-form.component';
import { CitizenRegistrationComponent } from './commons/citizen-registration/citizen-registration.component';
import { CitizenComplaintComponent } from './citizen/citizen-complaint/citizen-complaint.component';
import { CitizenComplaintStatusComponent } from './citizen/citizen-complaint-status/citizen-complaint-status.component';
import { ShowReportsComponent } from './department/show-reports/show-reports.component';
import { CitizenCommentComponent } from './citizen/citizen-comment/citizen-comment.component';
import { GlobalErrorHandlerService } from './service/global-error-handler.service';
import { HttpErrorInterceptor } from './service/http-error-interceptor.service';
import { ReopenComplainListComponent } from './department/reopen-complain-list/reopen-complain-list.component';
import { ForgetpasswordComponent } from './commons/forgetpassword/forgetpassword.component';
import { TimerPipe } from './pipe/timer.pipe';
import { CitizenHomeComponent } from './citizen/citizen-home/citizen-home.component';
import { DepartmentEntryComponent } from './department/department-entry/department-entry.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { PasswordValidatorDirective } from './directive/password-validator.directive' 
import { CitizenProfileComponent } from './citizen/citizen-profile/citizen-profile.component';
import { CitizenChangePasswordComponent } from './citizen/citizen-change-password/citizen-change-password.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DepartmentComponent,
    CitizenComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    CdepartmentComponent,
    NavbarComponent,
    FooterComponent,
    DepartmentHomeComponent,
    DepartmentComponent,
    SidenavComponent,
    ComplainListComponent,
    ProfileComponent,
    ReminderComplainComponent,
    ReportsComponent,
    TransferComplainComponent,
    CitizenRegistrationComponent,
    CsidenavComponent,
    ChangePasswordComponent,
    CitizenComplaintRegisterFormComponent,
    CitizenComplaintComponent,
    CitizenComplaintStatusComponent,
    ShowReportsComponent,
    CitizenCommentComponent,
    ReopenComplainListComponent,
    ForgetpasswordComponent,
    TimerPipe,
    CitizenHomeComponent,
    DepartmentEntryComponent,
    CitizenProfileComponent,
    CitizenChangePasswordComponent,
    PasswordValidatorDirective,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
