import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Department } from 'src/app/models/department';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-department-list',
  templateUrl: './admin-department-list.component.html',
  styleUrls: ['./admin-department-list.component.css']
})
export class AdminDepartmentListComponent implements OnInit {
   
  // deptList:Observable<Department>
 
  // constructor(private admniservice:AdminService) {
  //   this.deptList=this.admniservice.getDepartmentList()
  //   console.log(this.deptList)
  //  }
  deptList:any=[]
  constructor(private adminservice:AdminService) {
    this.adminservice.getDepartmentList().subscribe(
      data =>this.deptList = data
    )

  }
  ngOnInit(): void {
  
  }

}
