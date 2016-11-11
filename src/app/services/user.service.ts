// user.service.ts
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//add auth0 with JWT

@Injectable()
export class UserService {
  private loggedIn:boolean  = false;

  constructor(private http: Http) { 
    if(localStorage.getItem('auth_token'))
      this.loggedIn = localStorage.getItem('auth_token') == "true";
  }

  /*login(email: String , password: String) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/login', 
        JSON.stringify({ email, password }), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  /*getHeroes (): Observable<Boolean> {
    return true;
  }*/

  logIn(userName: String, pass: String): Boolean {
    console.log("User: " + userName + " pass: " + pass);
    this.loggedIn = true;
    localStorage.setItem('auth_token', "" + this.loggedIn);
    return this.loggedIn;
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return localStorage.getItem('auth_token') == "true";
  }
}