import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, switchMap } from 'rxjs/operators';
import { Departmenthead } from 'src/app/models/departmenthead';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-add-dept-head',
  templateUrl: './admin-add-dept-head.component.html',
  styleUrls: ['./admin-add-dept-head.component.css']
})
export class AdminAddDeptHeadComponent implements OnInit {

  //depthead: Departmenthead()
  depthead: Departmenthead = new Departmenthead();
  validUsername:boolean = false;
  constructor(
    private http: HttpClient,
    private adminservice: AdminService) { }

  ngOnInit(): void {
  }
  
  registerDepartmentHead() {
    this.adminservice.registerDepartmentHead(this.depthead).subscribe(data => {  });

  }

  checkUsername(){
    this.adminservice.checkUsername(this.depthead.username).subscribe(data => { 
      this.validUsername = data;
      console.log(this.validUsername);
      
    });
  }

}
