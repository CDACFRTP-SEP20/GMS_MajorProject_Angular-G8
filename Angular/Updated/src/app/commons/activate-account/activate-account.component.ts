import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  users:Users=new Users()
  email:string
  otpstatus:boolean
  confirmstatus:boolean
  countDown:any;
  counter=180 ;
  tick=1200;
  checkotp:any
  otp:any
  newpassword:any
  message:string
  constructor(private _userservice:UserService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  sendOTP(){
    this._userservice.sendOTP(this.users.email).subscribe(data=>{
      this.checkotp=data
    })
    this.otpstatus=true
    this.confirmstatus=true
   
  }
  confirmpass(){

      if(this.checkotp==this.users.otp){
        this.otpstatus=true
        this.confirmstatus=false
      }
      else{
        this.otpstatus=false
      this.confirmstatus=false
       this.message="OTP does't match"
      }  
  
  }
  resetPassword(){
      this._userservice.unlockAccount(this.users).subscribe(data=>{
      })
      this.toastr.success("Account Activation Successful")
      this.route.navigate(['login'])
  }
  

}
