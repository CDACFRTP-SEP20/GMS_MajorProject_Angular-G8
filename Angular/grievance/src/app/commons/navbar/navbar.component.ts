import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private router:Router,public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['login'])
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['login'])
  }
}
