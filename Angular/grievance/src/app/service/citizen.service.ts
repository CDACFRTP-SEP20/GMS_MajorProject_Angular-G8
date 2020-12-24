import { ReopenComplainListComponent } from './../department/reopen-complain-list/reopen-complain-list.component';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitizenDTO } from '../models/citizen-dto';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  token:any
  username:any
  // _deptName = new Subject();
  // deptName$ = this._deptName.asObservable();
    
  //   communicateDept(msg:String){
  //     this._deptName.next(msg);
  //   }
  constructor(private http :HttpClient) { }

  public registerCitizen(citizenDTO:CitizenDTO):Observable<any>{
    return this.httpclient.post("http://localhost:8787/citizen/registerCitizen",citizenDTO, {responseType: 'text' });
  }

  getComplainStatus(): Observable<any>{
   return this.http.get('http://localhost:8787/citizen/viewStatus?cid=1')
  }
getAllComment():Observable<any>{
return this.http.get('http://localhost:8787/citizen/getAllComment')
}

submitComplain(complaint:any):Observable<any>{
   
  return this.http.post('http://localhost:8787/citizen/CompRegister',complaint, {responseType:"text"})
}

getUsername():any{
  return this.username=sessionStorage.getItem('username');
 }

 getCitizenId(username:any):Observable<any>{  
  return  this.http.get(`http://localhost:8787/citizen/citizenId/${username}`);
}
reminder(compId:any):Observable<any>{  
  return  this.http.get(`http://localhost:8787/citizen/reminder/${compId}`)
}
reopen(compId:any):Observable<any>{  
  return  this.http.get(`http://localhost:8787/citizen/reopen/${compId}`)
}
}
