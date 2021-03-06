import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Department } from '../models/department';
import { AuthInterceptorService } from './auth-interceptor.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Departmenthead } from '../models/departmenthead';
import { ComplaintsDetails } from '../models/complaintDetails';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token: any
  options: any
  headerForDeptList: any
 
  constructor(private http: HttpClient, private intercept: AuthInterceptorService) { 
   
  }
 
  getToken() {
    this.token = sessionStorage.getItem('token');
  }

  getDepartmentList():Observable<Department[]>{
      return  this.http.get<Department[]>('http://localhost:8787/admin/departmentlist');
  }

  getDepartmentwiseCount(status:string):Observable<any>{
    return  this.http.get<any>('http://localhost:8787/admin/complainperDepartment/'+status);
  }

  getComplaintCount():Observable<any>{
    return  this.http.get<any>('http://localhost:8787/admin/statuswisecomplain');
  }
  getDepartmentHeadList(): Observable<any>{
    return this.http.get('http://localhost:8787/admin/departmentheadlist');
  }

  registerDepartmentHead(depthead: any): Observable<any> {
    return this.http.post('http://localhost:8787/admin/adddepartmenthead', depthead);
  }

  addDepartment(department: any): Observable<any> {
    console.log(department)
    return this.http.post('http://localhost:8787/admin/adddepartment', department);
  }

  checkUsername(username: any): Observable<any>{
    return this.http.get(`http://localhost:8787/admin/checkusername/${username}`);
  }

  checkDeptName(deptname: any): Observable<any>{
    return this.http.get(`http://localhost:8787/admin/checkdepartment/${deptname}`);
  }
  checkEmail(email: any): Observable<any>{
    return this.http.get(`http://localhost:8787/admin/checkemail/${email}`);
  }

  deleteDeptHead1(deptHeadId: string):Observable<any>{
    return this.http.delete(`http://localhost:8787/admin/deletedepertmenthead/${deptHeadId}`)
  }
  
  deleteDepartment(deptId: string):Observable<any>{
    return this.http.delete(`http://localhost:8787/admin/deletedepertment/${deptId}`)
  }
  getCountOfCitizen():Observable<number>{
    return this.http.get<number>('http://localhost:8787/admin/citizencount');
  }
  getAllComplaints():Observable<ComplaintsDetails[]>{
    return this.http.get<ComplaintsDetails[]>('http://localhost:8787/admin/viewcomplaints');
  }
  getComplaintsByStatus(status:string):Observable<ComplaintsDetails[]>{
    return this.http.get<ComplaintsDetails[]>(`http://localhost:8787/admin/viewcomplaints/${status}`);
  }
}
