import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LoginService } from '../services/login.service'

@Component({
  selector: 'log-in',
  templateUrl: '../../../../src/app/components/login/components/login.component.html',
  styleUrls: ['../../../../src/app/components/login/components/login.component.css']
})
export class LogInComponent {
	userName: String;
	pass: String;

	constructor(private route: ActivatedRoute,
    			private router: Router,
    			private loginService: LoginService){

	}
  
  logIn(event: any) {
  	console.log("clicked log in");
  	event.preventDefault();
  	let loggedin: boolean = this.loginService.logIn(this.userName,this.pass);
  	if(loggedin){
  		this.router.navigate(['/']);
  	}else{
  		console.log("error");
  	}
  }
}