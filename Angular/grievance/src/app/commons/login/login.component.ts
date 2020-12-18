import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private as: AuthenticationService) { }

  ngOnInit(): void {
  }

 errorMessage:string | undefined
  username:string | undefined
  password:string | undefined

  onLogin(){
    this.as.authenticate(this.username, this.password)
    .subscribe(
      data =>{
        if(data.roles[0] === "ROLE_CITIZEN"){
          this.router.navigate(['citizen'])
        }
        if(data.roles[0] === "ROLE_ADMIN"){
          this.router.navigate(['admin'])
        }
        if(data.roles[0] === "ROLE_DEPARTMENT"){
          this.router.navigate(['department'])
        }
      },
      error =>{
        this.errorMessage = 'Login Failure'
      }
    )
  }

  admin(){
    this.router.navigate(['admin'])
  }
}
