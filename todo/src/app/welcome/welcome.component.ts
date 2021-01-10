import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message="Some welcome message"
  welcomeMessageFromService:string
  name =''

  constructor(private activatedRoute:ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
    this.name=this.activatedRoute.snapshot.params['name']
  }

  
  getWelcomeMessageWithParameter(){
    this.welcomeDataService.executeHelloWorldServiceWithVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
      );
    //console.log("Welocme message");
  }

  handleSuccessfullResponse(response){
    this.welcomeMessageFromService=response.message;
    // console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error){
    //console.log(error.error.message);
    this.welcomeMessageFromService=error.error.message;
  }

}
