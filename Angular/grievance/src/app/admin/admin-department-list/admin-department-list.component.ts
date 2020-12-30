import { Component, OnInit, OnChanges } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Department } from 'src/app/models/department';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-department-list',
  templateUrl: './admin-department-list.component.html',
  styleUrls: ['./admin-department-list.component.css']
})
export class AdminDepartmentListComponent implements OnInit ,OnChanges{
   
  // deptList:Observable<Department>
 
  // constructor(private admniservice:AdminService) {
  //   this.deptList=this.admniservice.getDepartmentList()
  //   console.log(this.deptList)
  //  }
  index:number=1
  deptNumber?:number
  errormessage:any

  deptList:Department[]
  constructor(private adminservice:AdminService ,private _userservice:UserService) {
    
  }
  ngOnInit(): void {
    this.adminservice.getDepartmentList().subscribe(data =>{
      this.deptList = data}
    )

    this._userservice.errormessage.subscribe(error=>{
      this.errormessage=error
    })
  }
  ngOnChanges(){
    this.ngOnInit()
  }
  
  deleteDepartment(deptId:any,index:number){
    this.deptNumber=index
    this.adminservice.deleteDepartment(deptId).subscribe(data =>{})
    this.deptList.splice(this.deptNumber, 1);
  }

}
