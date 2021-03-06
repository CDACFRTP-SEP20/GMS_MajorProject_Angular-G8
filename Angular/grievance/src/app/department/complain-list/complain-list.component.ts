import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { Department } from 'src/app/models/department';
import { GlobalErrorHandlerService } from 'src/app/service/global-error-handler.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ComplainListComponent implements OnInit {

  complains: any = [];
  compId: string = ''
  display = "none";
  transferDisplay = "none";
  index: number = 1;
  remark: string = '';
  deptId: string
  deptList: Department[] = []
  msg: string = '';
  remarkNumber!: number;
  totalRecords: number
  page: number = 1
  errorMsg: string='';
  showModal: boolean;
  file: any
  name: any


  increaseCount(): number {
    return this.index + (this.page - 1) * 10
  }
  constructor(private departmentService: DepartmentService, private router: Router, private userService:UserService) {
    
  }

  ngOnInit() {
    this.departmentService.getAllDepartmentList().subscribe(data => {
      this.deptList = data
    }
    )
    this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id => {
        this.deptId = id.deptId
        this.departmentService.getPendingComplainList(this.deptId).pipe(
          map(dataList => dataList.filter((data: { status: string; }) => data.status === "PENDING"))
        ).subscribe(
          data => {
            this.complains = data
            this.totalRecords = data.length
          }
          
        )

      })
   
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
    this.totalRecords = this.complains.length
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
    this.totalRecords = this.complains.length
    form.reset();
    this.onTransferClose();
  }


  show(file: any) {
    this.file = file
    this.showModal = true;

  }
  hide() {
    this.showModal = false;
  }
}
