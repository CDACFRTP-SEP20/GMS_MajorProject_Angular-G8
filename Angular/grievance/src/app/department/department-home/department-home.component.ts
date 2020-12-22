import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.css']
})
export class DepartmentHomeComponent implements OnInit {

  deptId:any=[]
  constructor(private deptService : DepartmentService) { 
    this.deptService.getDeptId(deptService.getUsername()).subscribe(
      id=>this.deptId=id
    )
  }

  ngOnInit(): void {
  }

}
