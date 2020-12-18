import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { AuthInterceptorService } from './auth-interceptor.service';
import {map} from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token:any
  options:any
  headerForDeptList:any
  constructor(private http: HttpClient,private intercept:AuthInterceptorService) { }
  


  
  getToken(){
    this.token=sessionStorage.getItem('token');
  }
  getDepartmentList():Observable<any>{

 return  this.http.get('http://localhost:8787/admin/departmentlist');
  
  }


}
