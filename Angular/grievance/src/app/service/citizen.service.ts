import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getComplainStatus(): Observable<any>{
   return this.httpclient.get('http://localhost:8787/citizen/viewStatus?cid=1')
  }
getAllComment():Observable<any>{
return this.httpclient.get('http://localhost:8787/citizen/getAllComment')
}

}
