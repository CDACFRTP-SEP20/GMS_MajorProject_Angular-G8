import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Department } from '../models/department';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
 
  token:any

  ngOnInit(){
    console.log(sessionStorage.getItem('username'));
  }
  //username:string
  constructor(private http: HttpClient, private route:Router) { }
  isUserLoggedIn(){
  //  if( sessionStorage.getItem('username')!=null)
  //  {
  //    this.username=sessionStorage.getItem("username")
  //    return !(this.username === null)
  //  }
  //  else {
  //   this.username=localStorage.getItem("username")
  //   return !(this.username === null)
  // }
  let username= sessionStorage.getItem('username')
  return !(username === null)
  }

  loginStatus = new BehaviorSubject<boolean>(this.isUserLoggedIn())
  //@ts-ignore
  username = new BehaviorSubject<String>(sessionStorage.getItem('username'))
  //@ts-ignore
  userrole = new BehaviorSubject<String>(sessionStorage.getItem('userrole'))

  authenticate(username:any,password:any){ 
    return this.http.post<any>('http://localhost:8787/auth/authenticate',
    {username,password})
    .pipe(
      map((userData =>{
        sessionStorage.setItem('username',userData.username)
        sessionStorage.setItem('userrole', userData.roles)
        sessionStorage.setItem('token','Bearer' + userData.token)
       
        this.loginStatus.next(true)
        return userData
      })
      )
    )
  }
 
  getRole(){
    return sessionStorage.getItem('userrole')
  }
  logout() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userrole')

    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('userrole')

    //emit values
    this.loginStatus.next(false)
    //@ts-ignore
    this.username.next(null)
      //@ts-ignore
    this.userrole.next(null)
    
  }


}
