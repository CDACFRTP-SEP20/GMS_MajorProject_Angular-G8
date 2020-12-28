import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
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
  constructor(private _userservice:UserService) { }

  ngOnInit(): void {
  }
  sendOTP(){
    this.counter=180;
    this.users.otp=''
    console.log("inside send otp"+this.users.email)
    this._userservice.sendOTP(this.users.email).subscribe(data=>{
      this.checkotp=data
     console.log(this.checkotp)

    })
    this.otpstatus=true
    this.confirmstatus=true
    this.timerstart()
  }
  confirmpass(){
    console.log("inside send otp"+this.users.email)
      console.log("counter "+this.counter)
   if(this.counter>170)  
   {
      if(this.checkotp==this.users.otp){
        this.otpstatus=true
        this.confirmstatus=false
      }
      else{
        this.otpstatus=false
      this.confirmstatus=false
      this.timerstop()
      this.message="OTP does't match"
      }
   }
   else
   {
      this.message="Session timeout"
      this.timerstop()
      this.otpstatus=false
      this.confirmstatus=false
   }
  
  }
  resetPassword(){
      console.log(this.users)
      this._userservice.resetpassword(this.users).subscribe(data=>{

      })
  }
  timerstart(){
    this.countDown = this._userservice.getCounter(this.tick).subscribe(() => this.counter--);

  }
  timerstop(){
    this.countDown.unsubscribe()
   
  }
}
