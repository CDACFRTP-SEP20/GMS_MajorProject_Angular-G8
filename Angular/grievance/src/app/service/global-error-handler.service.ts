import { Injectable, ErrorHandler } from '@angular/core';
import { UserService } from './user.service';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
    errormesage:any
  constructor(private _userservice : UserService) { }
  
    handleError(error: Error) {
      console.log("=====")
      this.errormesage=error
        console.log(' error handling with global error handler... '+ error)

        console.log("====="+this.errormesage)
       // alert(error+this.errormesage)    //need to display to end users
        this._userservice.errormessage.next(error)

    }
}
