import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'grievance';

  constructor(private router:Router){}
  ngOnInit(){
    this.changenav()
  }
  changenav(){
    if(localStorage.getItem('role') === "ROLE_CITIZEN"){
      this.router.navigate(['citizen'])
    }
    if(localStorage.getItem('role')=== "ROLE_ADMIN"){
      this.router.navigate(['admin-adddepthead'])
      //this.router.navigate(['admin'])
    }
    if(localStorage.getItem('role') === "ROLE_DEPARTMENT"){
      this.router.navigate(['department'])
    }
  }
}
