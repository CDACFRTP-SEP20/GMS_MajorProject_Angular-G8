import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  errormessage = new Subject<any>()

  theme=new BehaviorSubject(localStorage.getItem('theme'))
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
  getnews(){
    return this.http.get('http://newsapi.org/v2/everything?q=%27.maharashtra.%27&from=2020-12-24&sortBy=publishedAt&apiKey=6004c562f1a34a3dbec8032b5377ede9')
  }
}
 