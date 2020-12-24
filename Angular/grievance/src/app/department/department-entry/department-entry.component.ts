import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.css']
})
export class DepartmentEntryComponent implements OnInit {

  deptId:any
  count:any=[]
  total:any=this.count[0]+this.count[1]+this.count[2]
  constructor(private s:AuthenticationService,private departmentService:DepartmentService) {
    this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id => {
        this.deptId = id.deptId
        this.departmentService.getCountOfAllComplains(this.deptId).subscribe(
          data => {
            this.count = data
          }
        )
      })
   }

   totalComplain(){
     return this.count[0]+this.count[1]+this.count[2]
   }
  ngOnInit(): void {
  }
  logout(){
    this.s.logout()
  }
}
