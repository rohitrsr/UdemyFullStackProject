import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER='authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  baseUrl = environment.apiUrl;
  
  constructor(private http:HttpClient) {
   }

  // authenticate(username,password){
  //  // console.log('before '+this.isUserLoggedIn);
  //   if(username==="rohit" && password==='rohit'){
  //     sessionStorage.setItem('authenticatedUser',username);
  //    // console.log('after '+this.isUserLoggedIn);
  //     return true;
  //   }  
  //   return false;
  // }

  executeJwtAuthenticationService(username,password){
    //console.log(this.baseUrl);
    return this.http.post<any>(`${this.baseUrl}/authenticate`,
    {username,password}).pipe(map(
      response=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username)
        sessionStorage.setItem(TOKEN,`Bearer ${response.token}`)
        return response;
    }
    )
    );
     //    console.log("Welcome data service");
   }

  executeAuthenticationService(username,password){

    let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);
   
    let headers = new HttpHeaders({Authorization:basicAuthHeader})
    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
   
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`,
    {headers}).pipe(map(
      response=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username)
        sessionStorage.setItem(TOKEN,basicAuthHeader)
        return response;
    }
    )
    );
     //    console.log("Welcome data service");
   }


   getAuthenticatedUser(){
     return sessionStorage.getItem(AUTHENTICATED_USER)    
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN)    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user ===null)    
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN);
  }
}
 export class AuthenticationBean{
   constructor(public message:String){

   }
 }