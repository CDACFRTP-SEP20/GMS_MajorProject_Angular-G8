import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  users: Users = new Users()
  email: string
  otpstatus: boolean
  confirmstatus: boolean
  countDown: any;
  counter = 180;
  tick = 1200;
  checkotp: any
  otp: any
  newpassword: any
  message: string
  constructor(private _userservice: UserService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  sendOTP() {
    this.counter = 180;
    this.users.otp = ''
    this._userservice.sendOTP(this.users.email).subscribe(data => {
      this.checkotp = data

    })
    this.otpstatus = true
    this.confirmstatus = true
    this.timerstart()
  }
  confirmpass() {
    if (this.counter > 0) {
      if (this.checkotp == this.users.otp) {
        this.otpstatus = true
        this.confirmstatus = false
      }
      else {
        this.otpstatus = false
        this.confirmstatus = false
        this.timerstop()
        this.message = "OTP does't match"
      }
    }
    else {
      this.message = "Session timeout"
      this.timerstop()
      this.otpstatus = false
      this.confirmstatus = false
    }

  }
  resetPassword() {
    this._userservice.resetpassword(this.users).subscribe(data => {

    })
    this.toastr.success("Password Updated Successful")
    this.route.navigate(['login'])
  }
  timerstart() {
    this.countDown = this._userservice.getCounter(this.tick).subscribe(() => this.counter--);

  }
  timerstop() {
    this.countDown.unsubscribe()

  }
}
