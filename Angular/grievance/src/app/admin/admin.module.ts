import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDepartmentListComponent } from './admin-department-list/admin-department-list.component';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminDeptHeadListComponent } from './admin-dept-head-list/admin-dept-head-list.component';
import { AdminAddDeptHeadComponent } from './admin-add-dept-head/admin-add-dept-head.component';
import { AdminUpdateDeptHeadComponent } from './admin-update-dept-head/admin-update-dept-head.component';
import { AdminComplaintComponent } from './admin-complaint/admin-complaint.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DeptiseComplaintComponent } from './deptise-complaint/deptise-complaint.component';
import { StatuswiseComplaintComponent } from './statuswise-complaint/statuswise-complaint.component';

@NgModule({
    declarations: [
      AdminHomeComponent,
      AdminDepartmentListComponent, 
      AdminAddDepartmentComponent, 
      AdminDeptHeadListComponent, 
      AdminAddDeptHeadComponent, 
      AdminUpdateDeptHeadComponent, 
      AdminComplaintComponent, SidenavComponent, DeptiseComplaintComponent, StatuswiseComplaintComponent
    ],
      imports: [
        BrowserModule,
        AdminRoutingModule
      ],
      providers: [],
      bootstrap: [AdminHomeComponent]
})
export class AdminModule { }