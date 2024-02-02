import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //! Get the token from the local storage
    const token = this.authService.getToken() ;

    if ( token ) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${token}` }
      }) ;
    }
    return next.handle(request);
  }
}
