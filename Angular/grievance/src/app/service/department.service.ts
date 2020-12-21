import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  token:any
  constructor(private http:HttpClient,private intercept:AuthInterceptorService) {
    
   }

  
  getToken(){
    this.token=sessionStorage.getItem('token');
  }
  getComplainList():Observable<any>{

 return  this.http.get(`http://localhost:8787/department/complain/${'d1'}`);
  
  }
}
