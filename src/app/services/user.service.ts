// user.service.ts
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//add auth0 with JWT

@Injectable()
export class UserService {
  private loggedIn:boolean  = false;

  private broSub: Subject<boolean>; //change type to brother


  constructor(private http: Http) { 
    this.broSub = new Subject<boolean>();

    if(localStorage.getItem('auth_token'))
      this.loggedIn = localStorage.getItem('auth_token') == "true";
    else
      localStorage.setItem('auth_token', ''+this.loggedIn);
  }

  logIn(userName: String, pass: String): Promise<boolean>{
    return this.post(userName, pass);
  }

  // Update existing Hero
  private post(userName: String, pass: String): Promise<boolean> {
    var user = {user: userName, psw: pass};

    let headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });
    console.log("inside auth " + JSON.stringify(headers)); 
    console.log(JSON.stringify(user));

    return this.http
      .post("http://localhost:8081/api/user/auth", user, { headers: headers })
      .toPromise()
      .then(res => {
                      console.log("cookie: " + JSON.stringify(res.json().brother));
                      localStorage.setItem('auth_token', JSON.stringify(res.json()));
                      this.loggedIn= true;
                      this.broSub.next(true);
                      return res.json().data;
                    }
        )
      .catch(this.handleError);
  }

  logout() {
//    localStorage.removeItem('auth_token');
    localStorage.setItem('auth_token', '');
    this.loggedIn = false;
    this.broSub.next(false);
  }

  loginObs(): Subject<boolean>{
    return this.broSub;
  }
  isLoggedIn() {
    return (JSON.parse(localStorage.getItem('auth_token')).data);
  }

  private success(res: any): any{
    console.log("cookie: " + JSON.stringify(res.json().brother));
    localStorage.setItem('auth_token', JSON.stringify(res.json()));
    return res.json().data;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}