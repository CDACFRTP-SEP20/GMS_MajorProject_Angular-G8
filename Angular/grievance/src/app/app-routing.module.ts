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
import { DepartmentComponent } from './department/department.component';
import { CitizenComponent } from './citizen/citizen.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'department' , component : DepartmentComponent},
  {path : 'citizen' , component : CitizenComponent},
  {path : 'admin' , component : AdminHomeComponent,
      children:[
          {path:'admin-deptlist',component:AdminDepartmentListComponent},
          {path:'admin-adddept',component:AdminAddDepartmentComponent},
          {path:'admin-deptheadlist',component:AdminDepartmentListComponent},
          {path:'admin-adddepthead',component:AdminAddDeptHeadComponent},
          {path:'admin-complaintlist',component:AdminComplaintComponent}

      ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
