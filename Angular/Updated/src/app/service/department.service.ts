import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { Department } from '../models/department';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  token: any
  username: any


  constructor(private http: HttpClient, private intercept: AuthInterceptorService) {

  }
  getUsername(): any {
    return this.username = sessionStorage.getItem('username');
  }

  getToken() {
    this.token = sessionStorage.getItem('token');
  }

  getPendingComplainList(deptId: any): Observable<any> {

    return this.http.get(`http://localhost:8787/department/pendingComplain/${deptId}`);
  }
  getReopenComplainList(deptId: any): Observable<any> {

    return this.http.get(`http://localhost:8787/department/reopenComplain/${deptId}`);
  }
  getComplainList(deptId: any,status:any): Observable<any> {
    return this.http.get(`http://localhost:8787/department/complain/${deptId}/${status}`);
  }

  getreminderComplain(deptId: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8787/department/reminderComplain/${deptId}`);
  }

  getDeptId(username: any): Observable<any> {
    return this.http.get(`http://localhost:8787/department/deptId/${username}`);
  }

  getAllDepartmentList(): Observable<any> {
    return this.http.get("http://localhost:8787/department/departmentList");
  }

  submitRemark(compId: any, remark: any): Observable<any> {
    return this.http.put<any>("http://localhost:8787/department/submitRemark", { compId, remark });

  }

  transferComplain(compId: any, deptName: any): Observable<any> {
    return this.http.post<any>("http://localhost:8787/department/transferComplain", { compId, deptName });

  }

  changePassword(username: any, oldPassword: any, newPassword: any): Observable<any> {
    return this.http.post<any>("http://localhost:8787/citizen/changePassword", { username, oldPassword, newPassword });

  }

  getDepartmentHeadDetail(deptId: any): Observable<any> {
    return this.http.post<any>("http://localhost:8787/department/departmentHeadDetail", { deptId });
  }

  getCountOfAllComplains(deptId: any): Observable<any>{
    return this.http.post<any>("http://localhost:8787/department/countOfAllComplain", { deptId });
  }


}
