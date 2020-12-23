import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitizenDTO } from '../models/citizen-dto';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  _deptName = new Subject();
  deptName$ = this._deptName.asObservable();
    
    communicateDept(msg:String){
      this._deptName.next(msg);
    }
  constructor(private httpclient :HttpClient) { }

  public registerCitizen(citizenDTO:CitizenDTO):Observable<any>{
    return this.httpclient.post("http://localhost:8787/citizen/registerCitizen",citizenDTO, {responseType: 'text' });
  }

  getComplainStatus(): Observable<any>{
   return this.httpclient.get('http://localhost:8080/citizen/viewStatus?cid=1')
  }
getAllComment():Observable<any>{
return this.httpclient.get('http://localhost:8787/citizen/getAllComment')
}

}
