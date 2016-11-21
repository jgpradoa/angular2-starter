import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  private loggedIn: boolean = false;
  private userUrl = 'http://localhost:8081/api/user';  // URL to web api

  constructor(private http: Http) { }

  logIn(userName: String, pass: String): boolean{
    console.log("User: " + userName + " pass: " + pass);
    this.loggedIn = true;
    localStorage.setItem('auth_token', "" + this.loggedIn);
    return true;
  }

  testingLogIn(userName: String, pass: String): Promise<boolean>{
    return this.post(userName, pass);
  }

  testingApi(): Promise<any[]>{
    return this.getAll();
  }

  //getAll
  getAll(): Promise<any[]> {
    return this.http
      .get(this.userUrl + "/getAll")
      .toPromise()
      .then(response => response.json().data as any[])
      .catch(this.handleError);
  }

  // Update existing Hero
  private post(userName: String, pass: String): Promise<boolean> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    var user = {user: userName, psw: pass};

    return this.http
      .post(this.userUrl + "/auth", JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
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