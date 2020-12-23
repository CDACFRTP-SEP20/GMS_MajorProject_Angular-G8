import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  errormessage = new Subject<any>()
  constructor(private http: HttpClient) { }


  getCounter(tick:any) {
    return timer(0, tick) 
  }
  sendOTP(email:any):Observable<string[]>{
    return  this.http.post<string[]>('http://localhost:8787/sendOTP',email);
}
  resetpassword(users:any):Observable<string[]>{
    return  this.http.post<string[]>('http://localhost:8787/resetpassword',users);
  }
}
