import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import { Departmenthead } from 'src/app/models/departmenthead';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  deptId: string
  headDetail: Departmenthead = new Departmenthead()
  username: any
  name: any
  constructor(private route: Router, private departmentService: DepartmentService) {
   
  }

  ngOnInit(): void {
    this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id => {
        this.deptId = id.deptId
        this.departmentService.getDepartmentHeadDetail(this.deptId).subscribe(
          data => {
            this.headDetail = data
            this.username = this.departmentService.getUsername();
          }
        )
      }
    )
  }
  changePass() {
    this.route.navigate(['department/department-change-password'])
  }
}
