import { Injectable } from '@angular/core';
import { CanActivate, 
		 ActivatedRouteSnapshot,
  		 RouterStateSnapshot,
  		 Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

//make it observable

@Injectable()
export class CanActivateUser implements CanActivate {
  constructor(private loginService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
  	console.log("can activate");
  	//check if he is logged in
  	let auth: boolean = this.loginService.isLoggedIn();
  	//if auth is false redirect to login
  	if(!auth){
  		this.router.navigate(['/login']); 
  		return auth;
  	}

  	return auth;
  }
}