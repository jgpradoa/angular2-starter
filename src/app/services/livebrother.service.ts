 /// <reference path="../../../typings/globals/socket.io-client/index.d.ts" /> 
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from "socket.io-client";

@Injectable()
export class LiveBrotherService {
  private url = 'http://localhost:5000';  
  private socket: any;
  
  sendMessage(message: String){
    this.socket.emit('add-message', message);    
  }
  
  getMessages() {
    let observable = new Observable((observer: any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

  close(){
    this.socket.disconnect();
  }
}