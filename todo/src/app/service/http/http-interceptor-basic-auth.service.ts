import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthentucationService:BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username ='rohit'
    // let password = 'rohit'
    // let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);

    let basicAuthHeaderstring=this.basicAuthentucationService.getAuthenticatedToken();
    let username = this.basicAuthentucationService.getAuthenticatedUser();

    if(basicAuthHeaderstring && username){
      request = request.clone({
        setHeaders:{
          Authorization:basicAuthHeaderstring
        }
      })
    }
    return next.handle(request);
  }
}
