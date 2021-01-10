import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rohit'
  password = ''
  errorMessage='Invalid Credentials'
  invalidLogin = false;
  error:any
  env = environment.envName;

  constructor(private router:Router,
    private hardcodedAuthentication:HardcodedAuthenticationService,
    private basicAuth:BasicAuthenticationService,
    ) { }

  ngOnInit() {
  }

  handleLogin(){

    // console.log(this.username)
    // if(this.username==="rohit" && this.password==='rohit'){
    //   // this.invalidLogin=false
    //   this.router.navigate(['welcome',this.username
    // ])
    // }    
    // else{
    //   this.invalidLogin=true;
    // }
    if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username ]);
      this.invalidLogin=false;
    }
    this.invalidLogin=true;
  }

  handleBasicAuthLogin(){

    this.basicAuth.executeAuthenticationService(this.username,this.password)
    .subscribe(
      response=>{console.log(response)
        this.router.navigate(['welcome',this.username ]);
        this.invalidLogin=false;
      },
      error=>{
        //console.log(error.error.message)
        this.invalidLogin=true;
      }
    );
  }

  handleJwtLogin(){

    this.basicAuth.executeJwtAuthenticationService(this.username,this.password)
    .subscribe(
      response=>{
        //console.log(response)
        this.router.navigate(['welcome',this.username ]);
        this.invalidLogin=false;
      },
      error=>{
        //console.log(error.error.message)
        this.invalidLogin=true;
      }
    );

  }

}
