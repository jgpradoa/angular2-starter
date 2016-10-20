import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ForgotPassService } from '../services/forgotpass.service'

@Component({
  selector: 'fogot-pass',
  templateUrl: '../../../../src/app/components/login/components/forgotpass.component.html',
  styleUrls: ['../../../../src/app/components/login/components/forgotpass.component.css']
})
export class ForgotPassComponent {
	email: String;

	constructor(private route: ActivatedRoute,
          //private forgotPassService : ForgotPassService,
    			private router: Router){
    			//private loginService: LoginService){

	}
  
  reset(event: any) {
  	console.log("clicked log in");
  	event.preventDefault();
  	//let successful: boolean = this.forgotPassService.error(this.email);
  	if(true){
  		this.router.navigate(['/login']);
  	}
  }
}