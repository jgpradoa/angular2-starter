import { Component, ViewChild, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../../services/user.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'log-in',
  templateUrl: '../../../../src/app/components/login/components/login.component.html',
  styleUrls: ['../../../../src/app/components/login/components/login.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild('userInput') user: any;
  @ViewChild('paswInput') password: any;

  userError: String = "";
  passError: String = "";
  msgs: any[] = [];

	constructor(private route: ActivatedRoute,
    			private router: Router,
    			private loginService: UserService){

	}

  ngOnInit() {
    this.user.focus();
  }

  //call service and make service validate the inputs
  logIn(event: any) {
  	console.log("clicked log in");
  	event.preventDefault();
    let userInput: String = this.user.value;
    let passInput: String = this.password.value;
    if(userInput == ""){
      this.userError = "please enter username";
    }
    else
      this.userError = "";

    if(passInput == ""){
      this.passError = "please enter password";
    }
    else
      this.passError = "";

    console.log("username " + userInput + "passw: " + passInput);

    if(userInput != "" && passInput != ""){
      //change to observable
      this.loginService.logIn(userInput,passInput).then(auth => {
                                                                  console.log("auth: " + JSON.stringify(auth));
                                                                  if(auth){  
                                                                    this.msgs = [];
                                                                    this.router.navigate(['/']);
                                                                  }
                                                                })
                                                                .catch(error => {
                                                                  console.log("auth: " + JSON.stringify(error));
                                                                  this.msgs = [];
                                                                  this.msgs.push({severity:'error', summary:'Error Message', detail: error.json().error});
                                                                });
    	
    }
  }

}