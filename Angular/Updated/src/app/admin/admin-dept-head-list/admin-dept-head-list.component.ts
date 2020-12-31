import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-dept-head-list',
  templateUrl: './admin-dept-head-list.component.html',
  styleUrls: ['./admin-dept-head-list.component.css']
})
export class AdminDeptHeadListComponent implements OnInit {

  index: number = 1
  deptHeadNumber?: number
  deptHeadList: any = []
  errormessage: string = ""
  constructor(private adminservice: AdminService, private _userservice: UserService) {
    this.adminservice.getDepartmentHeadList().subscribe(
      data => this.deptHeadList = data
    )
    this._userservice.errormessage.subscribe(error => {
      this.errormessage = error
    })
  }
  ngOnInit(): void {
  }

  deleteDeptHead(deptHeadId: string, index: number) {
    this.deptHeadNumber = index
    this.adminservice.deleteDeptHead1(deptHeadId).subscribe(data => { })
    this.deptHeadList.splice(this.deptHeadNumber, 1);
  }
}
