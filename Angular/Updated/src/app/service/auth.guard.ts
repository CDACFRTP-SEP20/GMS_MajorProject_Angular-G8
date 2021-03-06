import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  isUserLoggedIn: boolean 
  role: any

  constructor(private router: Router,
    private authService: AuthenticationService,
    private user:UserService){
    this.isUserLoggedIn = authService.isUserLoggedIn()
    this.role = authService.getRole()
  }
  
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.isUserLoggedIn){
      if(route.data.role === sessionStorage.getItem('userrole')){
        return true;
      }else{
        this.router.navigate(['login'])
        return false;
      }

    }else{
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
