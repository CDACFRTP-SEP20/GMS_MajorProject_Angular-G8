import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse

} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
          .pipe(
              retry(0),
              catchError((error: HttpErrorResponse) => {
                  let errorMessage = '';
                  if (error.error instanceof ErrorEvent) {
                      errorMessage = `client-Error: ${error.error.message}`;
                  } else {
                      errorMessage = `server-Error:  ${error.error.message}  status code:  ${error.error.status}`;
                      ///you can modify message based on status code
                      console.log("aaaaaaaaaaa"+error.error.status)
                      switch (error.error.status) {
                          case 404:
                              errorMessage = 'List is not present ' + error.error.message
                              break;
                          case 401:
                              errorMessage = 'this is 401 status code'
                              break;
                         case 500:
                              errorMessage = 'this is 401 status code'
                              break;
                              

                        }
                    }
                    // console.log(' error using interceptor ' + errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
}