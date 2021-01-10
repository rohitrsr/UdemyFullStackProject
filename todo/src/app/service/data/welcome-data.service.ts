import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldService(){
   // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
   return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    //    console.log("Welcome data service");
  }

  executeHelloWorldServiceWithVariable(name){
    // let basicAuth = this.createBasicAuthenticationHeader();
    // let headers = new HttpHeaders({Authorization:basicAuth})

    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));

    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean/${name}`//,
    //{headers}
    );
     //    console.log("Welcome data service");
   }

  //  createBasicAuthenticationHeader(){
  //   let username ='rohit'
  //   let password = 'rohit'
  //   let basicAuthHeader = 'Basic '+window.btoa(username+':'+password);
  //   return basicAuthHeader;
  //  }
 
}
