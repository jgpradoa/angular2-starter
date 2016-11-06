import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  loggedIn: boolean = false;

  logIn(userName: String, pass: String): boolean{
    console.log("User: " + userName + " pass: " + pass);
    this.loggedIn = true;
    localStorage.setItem('auth_token', "" + this.loggedIn);
    return true;
  }

  isLoggedIn(): boolean{

  	let auth = localStorage.getItem('auth_token');

  	if(auth && auth === "true"){
  		this.loggedIn = true;	
  		return true;
  	}
  	
  	return this.loggedIn;
  }

  logOut(){

    localStorage.removeItem('auth_token');
  }
}