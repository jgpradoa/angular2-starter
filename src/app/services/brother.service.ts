// user.service.ts
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Observable';

import { Brother } from '../model/brother';

//add auth0 with JWT

@Injectable()
export class BrotherService {
  
  /*private errors: BehaviorSubject<any> = new BehaviorSubject([{}]);
  public errorObs: Observable<any> = this.errors.asObservable();*/

  constructor(private http: Http) { 
    
  }

  getAllBrother(): Promise<Brother[]>{
    return this.getBrothers();
  }

  // Update existing Hero
  private getBrothers(): Promise<Brother[]> {
    
    let headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });
    
    return this.http
      .get("http://localhost:8081/api/brother/getall", { headers: headers })
      .toPromise()
      .then(res => {
                      console.log("data: " + JSON.stringify(res.json().data));
                      return res.json().data;
                    }
        )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}