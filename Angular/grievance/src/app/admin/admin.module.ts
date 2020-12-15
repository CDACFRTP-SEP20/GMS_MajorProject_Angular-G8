import { NgModule } from "@angular/core";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDepartmentListComponent } from './admin-department-list/admin-department-list.component';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminDeptHeadListComponent } from './admin-dept-head-list/admin-dept-head-list.component';
import { AdminAddDeptHeadComponent } from './admin-add-dept-head/admin-add-dept-head.component';
import { AdminUpdateDeptHeadComponent } from './admin-update-dept-head/admin-update-dept-head.component';
import { AdminComplaintComponent } from './admin-complaint/admin-complaint.component';

@NgModule({
    declarations: [
      AdminHomeComponent,
      AdminDepartmentListComponent, 
      AdminAddDepartmentComponent, 
      AdminDeptHeadListComponent, 
      AdminAddDeptHeadComponent, 
      AdminUpdateDeptHeadComponent, 
      AdminComplaintComponent
    ],
      imports: [
       
      ],
      providers: [],
      bootstrap: []
})
export class AdminModule { }
