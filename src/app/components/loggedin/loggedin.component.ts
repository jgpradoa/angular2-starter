import { Component } from '@angular/core';

import { GeoLocationService } from './../../services/geolocation.service';

import 'rxjs/add/operator/toPromise';

//To-do
// break this down

@Component({
  selector: 'logged-in',
  templateUrl: '../../../../src/app/components/loggedin/loggedin.component.html',
  styleUrls: ['../../../../src/app/components/loggedin/loggedin.component.css']
})
export class LoggedInComponent {

	//add X in input
  	brothers: string[] = ['Sebastian','Christopher','Kevin','Josue','Juan','Eddy','Jose','Isaac','Juan-luis'];
    
    filteredBrothers: any[] = [];
    
    brother: string;

    isDisabled: boolean = false;
    clickCounter: number = 0;

    //Observable

    constructor(private geoLocationService:GeoLocationService){
        this.filteredBrothers = this.brothers;
        geoLocationService.getLocationSubj().subscribe((value: any) => console.log('Received value: ' + JSON.stringify(value)));
        geoLocationService.getLocation();
        
        console.log('done!');

        /*console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');*/
    }
        
    filterBrands(event: any) {
        this.filteredBrothers = [];
        console.log("as " + event.query);
        for(let i = 0; i < this.brothers.length; i++) {
            let brother = this.brothers[i];
            if(brother.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrothers.push(brother);
            }
        }
    }
    
    handleDropdownClick() {
        this.filteredBrothers = [];
        
        //mimic remote call
        setTimeout(() => {
            this.filteredBrothers = this.brothers;
        }, 100)
    }

    selectedBrother(brother: any){
    	console.log(JSON.stringify(brother));
    }

    //reseting filter brothers when input is empty
    clearInp(event:any) {
        let values: String = event.target.value;
        if(values.length == 0)
            this.filteredBrothers = this.brothers;

    }
}