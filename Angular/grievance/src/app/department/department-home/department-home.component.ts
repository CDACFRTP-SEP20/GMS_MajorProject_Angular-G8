import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.css']
})
export class DepartmentHomeComponent implements OnInit {

  deptId:string
  constructor(private deptService : DepartmentService) { 
    this.deptService.getDeptId(deptService.getUsername()).subscribe(
      id=>{
        this.deptId=id.deptId
      }
     
    )
    
  }
  ngOnInit(): void {
  }

}
