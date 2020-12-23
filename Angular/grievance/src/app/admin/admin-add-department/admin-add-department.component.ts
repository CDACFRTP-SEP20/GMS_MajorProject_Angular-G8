import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { Department } from 'src/app/models/department';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-add-department',
  templateUrl: './admin-add-department.component.html',
  styleUrls: ['./admin-add-department.component.css']
})
export class AdminAddDepartmentComponent implements OnInit {
 
  validDeptname:boolean = false;
  department:Department = new Department();
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
  }

  addDepartment(){
    this.adminservice.addDepartment(this.department).subscribe(
      data => {
        console.log(this.department)
    })
  }

  checkDeptName(){
    this.adminservice.checkDeptName(this.department.departmentName).subscribe(data=>{
      this.validDeptname = data;
      console.log(this.validDeptname);
    })
  }


}
