import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitizenDTO } from '../models/citizen-dto';

@Injectable({
  providedIn: 'root',
})
export class CitizenService {
  token: any;
  username: any;

  constructor(private http: HttpClient) {}

  getCitizen(citizenId: any): Observable<any> {
    return this.http.get(`http://localhost:8787/citizen/getCitizen/${citizenId}` );
  }
  getComplainStatus(cid: any): Observable<any> {
    return this.http.get('http://localhost:8787/citizen/viewStatus', {
      params: new HttpParams().set('cid', cid),
    });
  }

  getComplainStatus(): Observable<any> {
    return this.http.get('http://localhost:8787/citizen/viewStatus?cid=1')
  }
  public registerCitizen(citizenDTO:CitizenDTO):Observable<any>{
    return this.http.post("http://localhost:8787/registerCitizen",citizenDTO, {responseType: 'text' });

  }

  getAllComment(): Observable<any> {
    return this.http.get('http://localhost:8787/citizen/getAllComment');
  }

  submitComplain(complaint: any): Observable<any> {
    return this.http.post(
      'http://localhost:8787/citizen/CompRegister',
      complaint,
      { responseType: 'text' }
    );
  }

  getUsername(): any {
    return (this.username = sessionStorage.getItem('username'));
  }

  getCitizenId(username: any): Observable<any> {
    return this.http.get(`http://localhost:8787/citizen/citizenId/${username}`);
  }
  reminder(compId: any): Observable<any> {
    return this.http.get(`http://localhost:8787/citizen/reminder/${compId}`);
  }
  reopen(compId: any): Observable<any> {
    return this.http.get(`http://localhost:8787/citizen/reopen/${compId}`);
  }
  postComment(commentInfo:any): Observable<any> {
    return this.http.post(`http://localhost:8787/citizen/postComment`, commentInfo);
  }

  getAllComplain(): Observable<any> {
    return this.http.get(`http://localhost:8787/citizen/compList`);
  }

}
