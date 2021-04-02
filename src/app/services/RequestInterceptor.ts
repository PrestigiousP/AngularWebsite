import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // authToken: 'auth-token';
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor got called');
    // Add auth token
    // In production you would get the token value by the auth service
    const hardCodedToken = 'AJi4QfHu_jhfnHkHKNjlkKQRyshhX7aSvifd_gSZO86Z4LiDCshQNzgpnoTPjbD9TxzsjlVvx6A';
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${hardCodedToken}`
      }
      // { headers: req.headers.set('Authorization', `Bearer ${this.hardCodedToken}`)
    });
    return next.handle(authReq);
  }
}
