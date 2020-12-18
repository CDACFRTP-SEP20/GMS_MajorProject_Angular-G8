import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { AboutComponent } from './commons/about/about.component';
import { ContactComponent } from './commons/contact/contact.component';
import { LoginComponent } from './commons/login/login.component';
import { CdepartmentComponent } from './commons/cdepartment/cdepartment.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDepartmentListComponent } from './admin/admin-department-list/admin-department-list.component';
import { AdminAddDepartmentComponent } from './admin/admin-add-department/admin-add-department.component';
import { AdminAddDeptHeadComponent } from './admin/admin-add-dept-head/admin-add-dept-head.component';
import { AdminComplaintComponent } from './admin/admin-complaint/admin-complaint.component';
import { AdminDeptHeadListComponent } from './admin/admin-dept-head-list/admin-dept-head-list.component';
import { CitizenHomeComponent } from './citizen/citizen-home/citizen-home.component';
import { CitizenRegistrationComponent } from './citizen/citizen-registration/citizen-registration.component';
import { CitizenComplaintRegisterComponent } from './citizen/citizen-complaint-register/citizen-complaint-register.component';
import { DeptiseComplaintComponent } from './admin/deptise-complaint/deptise-complaint.component';
import { StatuswiseComplaintComponent } from './admin/statuswise-complaint/statuswise-complaint.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'cdepartment' , component : CdepartmentComponent},
  {path : 'admin' , component : AdminHomeComponent,
      children:[
          {path:'admin-deptlist',component:AdminDepartmentListComponent},
          {path:'admin-adddept',component:AdminAddDepartmentComponent},
          {path:'admin-deptheadlist',component:AdminDeptHeadListComponent},
          {path:'admin-adddepthead',component:AdminAddDeptHeadComponent},
          {path:'admin-complaintlist',component:AdminComplaintComponent},
          {path:'admin-deptwisecomplaintlist',component:DeptiseComplaintComponent},
          {path:'admin-statuscomplaintlist',component:StatuswiseComplaintComponent},


      ]
},
{path:'citizen', component:CitizenHomeComponent,
  children:[
    {path:'citizen-home', component:CitizenHomeComponent},
    {path:'citizen-register', component:CitizenRegistrationComponent},
    {path:'citizen-complaint-register', component:CitizenComplaintRegisterComponent},

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
