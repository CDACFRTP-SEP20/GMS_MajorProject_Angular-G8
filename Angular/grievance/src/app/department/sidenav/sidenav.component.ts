import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Departmenthead } from 'src/app/models/departmenthead';
import { DepartmentService } from 'src/app/service/department.service';
import { ProfileComponent} from '../profile/profile.component';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  headDetail:Departmenthead=new Departmenthead()
  deptId:any
  theme:any
  constructor(private departmentService: DepartmentService,private _userService:UserService) {
    this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id=>{
        this.deptId=id.deptId
        this.departmentService.getDepartmentHeadDetail(this.deptId).subscribe(
          data=>{
            this.headDetail=data
          }
          )
      }
    )
  }

 //theme:any=localStorage.getItem('theme')

 

 ngOnInit(): void {
   this._userService.theme.subscribe(data=>{
     this.theme=data
   })
   console.log(this.theme)
 }
}
