import { CitizenHomeComponent } from './citizen/citizen-home/citizen-home.component';
import { CitizenComplaintStatusComponent } from './citizen/citizen-complaint-status/citizen-complaint-status.component';
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
import { TransferComplainComponent } from './department/transfer-complain/transfer-complain.component';
import { ReportsComponent } from './department/reports/reports.component';
import { ReopenComplainListComponent } from './department/reopen-complain-list/reopen-complain-list.component';
import { ReminderComplainComponent } from './department/reminder-complain/reminder-complain.component';
import { ProfileComponent } from './department/profile/profile.component';
import { ComplainListComponent } from './department/complain-list/complain-list.component';
import { DepartmentHomeComponent } from './department/department-home/department-home.component';
import { AdminDeptHeadListComponent } from './admin/admin-dept-head-list/admin-dept-head-list.component';
import { DeptiseComplaintComponent } from './admin/deptise-complaint/deptise-complaint.component';
import { StatuswiseComplaintComponent } from './admin/statuswise-complaint/statuswise-complaint.component';
import { ChangePasswordComponent } from './department/change-password/change-password.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEntryComponent } from './admin/admin-entry/admin-entry.component';
import { CitizenComplaintRegisterFormComponent } from './citizen/citizen-complaint-register-form/citizen-complaint-register-form.component';
import { CitizenRegistrationComponent } from './commons/citizen-registration/citizen-registration.component';
import { CitizenComplaintComponent } from './citizen/citizen-complaint/citizen-complaint.component';
import { ShowReportsComponent } from './department/show-reports/show-reports.component';
import { CitizenCommentComponent } from './citizen/citizen-comment/citizen-comment.component';

import { AuthGuard } from './service/auth.guard';
import { DepartmentEntryComponent } from './department/department-entry/department-entry.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CitizenRegistrationComponent },
   {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"},
      children:[
        {path:'',component:AdminEntryComponent},
        {path:'admin-home',component:AdminEntryComponent},
          {path:'admin-deptlist',component:AdminDepartmentListComponent},
          {path:'admin-adddept',component:AdminAddDepartmentComponent},
          {path:'admin-deptheadlist',component:AdminDeptHeadListComponent},
          {path:'admin-adddepthead',component:AdminAddDeptHeadComponent},
          {path:'admin-complaintlist',component:AdminComplaintComponent},
          {path:'admin-deptwisecomplaintlist',component:DeptiseComplaintComponent},
          {path:'admin-statuscomplaintlist',component:StatuswiseComplaintComponent},
          {path: '**',redirectTo: 'login', pathMatch: 'full'}

      ]
},
{path:'citizen', component:CitizenComplaintComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_CITIZEN"},
    children:[
    {path:'citizen-home', component:CitizenComplaintComponent},
    {path:'citizen-register', component:CitizenRegistrationComponent},
    {path:'citizen-complaint-register', component:CitizenComplaintComponent},
     {path: 'citizen-complaint',component:CitizenComplaintComponent},
    {path:'citizen-complaint-register-form', component:CitizenComplaintRegisterFormComponent},
    {path: 'citizen-complaint-status',component:CitizenComplaintStatusComponent},
    {path: 'citizen-comment',component:CitizenCommentComponent},
    {path: '**',redirectTo: 'login', pathMatch: 'full'}
  ]
},


  {
    path: 'department',
    component: DepartmentHomeComponent,
    children: [
      { path: '',component: DepartmentEntryComponent },
      { path: 'department-home', component: DepartmentEntryComponent },
      { path: 'department-complain-list', component: ComplainListComponent },
      { path: 'department-profile', component: ProfileComponent },
      { path: 'department-change-password', component: ChangePasswordComponent },
      { path: 'department-reminder-complain', component: ReminderComplainComponent },
      { path: 'department-reopen-complain-list', component: ReopenComplainListComponent },
      { path: 'department-reports',
        component: ReportsComponent,
        children: [
          { path: 'department-show-reports', component: ShowReportsComponent },
        ],
      },
      { path: 'department-transfer-complain', component: TransferComplainComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
