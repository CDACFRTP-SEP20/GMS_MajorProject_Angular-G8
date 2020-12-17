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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
