import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPassword: string = ''
  newPassword: string = ''
  confirmPassword: string = ''
  msg: any = ''
  user: any

  constructor(private departmentService: DepartmentService) {

  }

  ngOnInit(): void {

  }


  onSubmit(form: NgForm) {
    this.oldPassword = form.value.oldpassword;
    this.newPassword = form.value.newPassword
    this.confirmPassword = form.value.confirmpassword
    this.departmentService.changePassword(this.departmentService.getUsername(), this.oldPassword, this.newPassword).subscribe(
      data => {
        this.user = data
        this.msg = 'Password Changed Successfully';
      }, () => {

        this.msg = "Current Password is Incorrect";
      }
    )
    form.reset()
  }

  showpassword() {
    return 'text'
  }



}

