import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, switchMap } from 'rxjs/operators';
import { Departmenthead } from 'src/app/models/departmenthead';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-add-dept-head',
  templateUrl: './admin-add-dept-head.component.html',
  styleUrls: ['./admin-add-dept-head.component.css']
})
export class AdminAddDeptHeadComponent implements OnInit {

  //depthead: Departmenthead()
  depthead: Departmenthead = new Departmenthead();
  validUsername: boolean = false;
  validEmail: boolean = false;
  constructor(
    private http: HttpClient,
    private adminservice: AdminService,
    private route: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerDepartmentHead() {
    this.adminservice.registerDepartmentHead(this.depthead).subscribe(data => { });
    this.toastr.success("Department Head Added Successful")
    //this.route.navigate(['/admin/admin-deptheadlist'])

  }

  checkUsername() {
    this.adminservice.checkUsername(this.depthead.username).subscribe(data => {
      this.validUsername = data;
    });
  }

  checkEmail() {
    this.adminservice.checkEmail(this.depthead.email).subscribe(data => {
      this.validEmail = data;
    })
  }

}
