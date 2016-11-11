// geolocation.service.ts
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//model
import { Coordinates } from '../model/coordinates';



@Injectable()
export class GeoLocationService {
  private latitude: number;
  private longitude: number;
  options: any = {};
  static subject:Subject<Coordinates>;

  constructor() {
      this.options = {
                            enableHighAccuracy: true,
                            timeout: 12000,
                            maximumAge: 0
                          };
      GeoLocationService.subject = new Subject();
  }

  success(pos: any): any {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    GeoLocationService.do_something(crd.latitude, crd.longitude);
    //return pos.coords;
  }

  static do_something(latitude: number, longitude: number){
        console.log('sis:');
        this.subject.next(new Coordinates(latitude,longitude));
  }

  error(err: any):any {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    return err;
  }

  //getLocation(): Observable<any> {
  getLocation(){  
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    GeoLocationService.subject.subscribe((value: any) => console.log('Received new subject value: ' + JSON.stringify(value)));
  }

  getLocationSubj(): Subject<Coordinates>{
    return GeoLocationService.subject;
  }
}

/*
export class cordinates{
  private latitude: number;
  private longitude: number;

  public getLatitude(): number{
     return this.latitude;
  }

  public getLongitude(): number{
     return this.longitude;
  }


}
*/