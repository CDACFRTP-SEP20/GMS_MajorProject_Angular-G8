import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { AuthInterceptorService } from './auth-interceptor.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Departmenthead } from '../models/departmenthead';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token: any
  options: any
  headerForDeptList: any
  constructor(private http: HttpClient, private intercept: AuthInterceptorService) { }

  getToken() {
    this.token = sessionStorage.getItem('token');
  }
  getDepartmentList(): Observable<any> {
    return this.http.get('http://localhost:8787/admin/departmentlist');
  }

  getDepartmentHeadList(): Observable<any>{
    return this.http.get('http://localhost:8787/admin/departmentheadlist');
  }

  registerDepartmentHead(depthead: any): Observable<any> {
    return this.http.post('http://localhost:8787/admin/adddepartmenthead', depthead);
  }

  addDepartment(department: any): Observable<any> {
    return this.http.post('http://localhost:8787/admin/adddepartment', department);
  }

  checkUsername(username: any): Observable<any>{
    return this.http.get(`http://localhost:8787/admin/checkusername/${username}`);
  }
  getDepartmentwiseCount(status:any){
    return  this.http.get('http://localhost:8787/admin/complainperDepartment/'+status);
  }
  checkDeptName(deptname: any): Observable<any>{
    return this.http.get(`http://localhost:8787/admin/checkdepartment/${deptname}`);
  }

  checkEmail(email: any): Observable<any>{
    return this.http.get(`http://localhost:8787/admin/checkemail/${email}`);
  }

  deleteDeptHead(deptHeadId: string):Observable<any>{
    return this.http.get(`http://localhost:8787/admin/deletedepertmenthead/${deptHeadId}`)
  }
  
  deleteDepartment(deptId: string):Observable<any>{
    return this.http.delete(`http://localhost:8787/admin/deletedepertment/${deptId}`)
  }
}
