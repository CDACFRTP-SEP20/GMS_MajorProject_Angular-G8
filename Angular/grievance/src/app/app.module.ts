import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { DepartmentHomeComponent } from './department/department-home/department-home.component';
import { SidenavComponent } from './department/sidenav/sidenav.component';
import { ComplainListComponent } from './department/complain-list/complain-list.component';
import { ProfileComponent } from './department/profile/profile.component';
import { ReminderComplainComponent } from './department/reminder-complain/reminder-complain.component';
import { ReportsComponent } from './department/reports/reports.component';
import { TransferComplainComponent } from './department/transfer-complain/transfer-complain.component';
import { CitizenHomeComponent } from './citizen/citizen-home/citizen-home.component';
import { CitizenRegistrationComponent } from './citizen/citizen-registration/citizen-registration.component';
import { CitizenComplaintRegisterComponent } from './citizen/citizen-complaint-register/citizen-complaint-register.component';
import { CsidenavComponent } from './citizen/csidenav/csidenav.component';
import { ChangePasswordComponent } from './department/change-password/change-password.component';
import { ShowReportsComponent } from './department/show-reports/show-reports.component';

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
    CitizenHomeComponent,
    CitizenRegistrationComponent,
    CitizenComplaintRegisterComponent,
    CsidenavComponent,
    ChangePasswordComponent,
    ShowReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
