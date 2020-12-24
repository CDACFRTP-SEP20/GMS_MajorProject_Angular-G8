import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {

  complains: any = [];
  compId: string = ''
  display = "none";
  transferDisplay = "none";
  index: number = 1;
  remark: string = '';
  deptId: string
  deptList: any = []
  msg: string = '';
  remarkNumber!: number;

  constructor(private departmentService: DepartmentService, private router: Router) {
    this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id => {
        this.deptId = id.deptId
        this.departmentService.getComplainList(this.deptId).pipe(
          tap(data => console.log(data)),
          map(dataList => dataList.filter((data: { status: string; }) => data.status === "PENDING"))
        ).subscribe(
          data => {
            this.complains = data
            console.log(data)
          }
        )
      })
  }

  ngOnInit() {

  }


  onClose() {
    this.display = "none";
  }
  onTransferClose() {
    this.transferDisplay = "none";
  }

  openModel(id: string, index: number) {
    this.compId = id;
    this.remarkNumber = index;

    this.display = "block";
  }
  openTransferModel(id: string, index: number) {
    this.compId = id;
    this.remarkNumber = index;
    this.transferDisplay = "block";
  }
  onRemarkSubmit(form: NgForm) {
    this.complains.splice(this.remarkNumber, 1);
    this.departmentService.submitRemark(this.compId, form.value.remark).subscribe(
      message => {
        if (message != null) {
          this.msg = "Complain is solved";
        }
        else {
          this.msg = "Try Again";
        }
      }
    )
    form.reset();
    this.onClose();

  }

  onTransferComplain(form: NgForm) {
    this.complains.splice(this.remarkNumber, 1);
    this.departmentService.transferComplain(this.compId, form.value.department).subscribe(
      message => {
        if (message != null) {
          this.msg = "Complain is Transfer";
        }
        else {
          this.msg = "Try Again";
        }
      }
    )
    form.reset();
    this.onTransferClose();
  }
}
