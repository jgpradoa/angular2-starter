import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  loggedIn: boolean = false;

  logIn(userName: String, pass: String): boolean{
    console.log("User: " + userName + " pass: " + pass);
    this.loggedIn = true;
    return true;
  }
}