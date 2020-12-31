import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  remember: boolean = false
  errormesg: any
  constructor(private router: Router, private as: AuthenticationService, private userservice: UserService) {
  }

  ngOnInit(): void {
    this.userservice.errormessage.subscribe(data => {
      this.errormesg = data
    })
  }

  errorMessage: string | undefined
  username: string | undefined
  password: string | undefined
  lockstatus: boolean = true
  onLogin() {
    this.userservice.getStatus(this.username).subscribe(data => {
      this.lockstatus = data

    })

    this.as.authenticate(this.username, this.password)
      .subscribe(
        data => {
          // if(this.remember===true){
          //     localStorage.setItem('username',sessionStorage.getItem('username'))
          //      localStorage.setItem('userrole', sessionStorage.getItem('userrole'))
          //       localStorage.setItem('token',sessionStorage.getItem('token'))
          // }

          if (data.roles[0] === "ROLE_CITIZEN") {
            this.router.navigate(['citizen'])
          }
          if (data.roles[0] === "ROLE_ADMIN") {
            this.router.navigate(['admin'])
          }
          if (data.roles[0] === "ROLE_DEPARTMENT") {
            this.router.navigate(['department'])
          }
        },
        error => {
          this.errorMessage = 'Bad Credential enter Correct Credential'
        }
      )
  }
  isChecked() {
    //    this.remember=true
  }
}
