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
	userName: String;
	pass: String;
  @ViewChild('userInput') user: any;
  @ViewChild('paswInput') password: any;
  userObs: Observable<FocusEvent>;
  userError: String = "";
  passError: String = "";

	constructor(private route: ActivatedRoute,
    			private router: Router,
    			private loginService: UserService){

	}

  ngOnInit() {
    this.user.focus();
    /*this.userObs.subscribe(
                     value => console.log("value: " + JSON.stringify(value)),
                     error => console.log("error: " + JSON.stringify(error)));*/
  }


  
  logIn(event: any) {
  	console.log("clicked log in");
  	event.preventDefault();
    let user: String = this.user.value;
    let pass: String = this.password.value;
    if(user == "")
      this.userError = "please enter username";

    if(pass == "")
      this.passError = "please enter password";

    console.log("username " + this.user.value + "passw: " + this.password.value);

    /*localStorage.setItem('id_token', "12345");
  	let loggedin: boolean = this.loginService.logIn(this.userName,this.pass);
  	if(loggedin){
  		this.router.navigate(['/']);
  	}else{
  		console.log("error");
  	}*/
  }
}