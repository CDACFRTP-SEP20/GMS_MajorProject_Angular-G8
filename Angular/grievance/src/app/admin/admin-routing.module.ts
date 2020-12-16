import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDepartmentListComponent } from './admin-department-list/admin-department-list.component';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminDeptHeadListComponent } from './admin-dept-head-list/admin-dept-head-list.component';
import { AdminAddDeptHeadComponent } from './admin-add-dept-head/admin-add-dept-head.component';
import { AdminUpdateDeptHeadComponent } from './admin-update-dept-head/admin-update-dept-head.component';


const routes: Routes = [
    {path : 'admin',component : AdminHomeComponent},
    {path : 'admin-home',component : AdminHomeComponent},
    {path : 'admin-deptlist',component : AdminDepartmentListComponent},
    {path : 'admin-adddepartment',component : AdminAddDepartmentComponent},
    {path : 'admin-deptheadlist',component : AdminDeptHeadListComponent},
    {path : 'admin-adddepthead',component : AdminAddDeptHeadComponent},
    {path : 'admin-updatedepthead',component : AdminUpdateDeptHeadComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
