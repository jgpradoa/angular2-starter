import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ForgotPassService } from '../services/forgotpass.service'

import {Message} from 'primeng/primeng';

@Component({
  selector: 'fogot-pass',
  templateUrl: '../../../../src/app/components/login/components/forgotpass.component.html',
  styleUrls: ['../../../../src/app/components/login/components/forgotpass.component.css']
})
export class ForgotPassComponent implements OnInit {
  @ViewChild('emailInput') email: any;

  msgs: Message[] = [];

	constructor(private route: ActivatedRoute,
          //private forgotPassService : ForgotPassService,
    			private router: Router){
    			//private loginService: LoginService){

	}
  
  ngOnInit() {
    this.email.focus();
  }

  reset(event: any) {
  	console.log("clicked log in" + this.email.value);
  	event.preventDefault();
  	//let successful: boolean = this.forgotPassService.error(this.email);
  	/*if(true){
  		this.router.navigate(['/login']);
  	}*/
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }
}