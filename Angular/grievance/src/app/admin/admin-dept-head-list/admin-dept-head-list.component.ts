import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-dept-head-list',
  templateUrl: './admin-dept-head-list.component.html',
  styleUrls: ['./admin-dept-head-list.component.css']
})
export class AdminDeptHeadListComponent implements OnInit {

  index:number=1
  deptHeadNumber?:number
  deptHeadList: any = []
  constructor(private adminservice: AdminService) {
    this.adminservice.getDepartmentHeadList().subscribe(
      data => this.deptHeadList = data
    )
  }
  ngOnInit(): void {
  }

  deleteDeptHead(deptHeadId: string,index:number) {
    this.deptHeadNumber=index
    this.adminservice.deleteDeptHead(deptHeadId).subscribe(data => { })
    this.deptHeadList.splice(this.deptHeadNumber, 1);
  }
}
