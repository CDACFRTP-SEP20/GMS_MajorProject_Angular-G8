import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }
 
    handleError(error: Error) {
        console.log(' error handling with global error handler... ', error)
        console.log("====="+error)
        alert(error)    //need to display to end users
    }
}
