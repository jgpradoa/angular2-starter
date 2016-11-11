import { Component } from '@angular/core';

import { GeoLocationService } from './../../services/geolocation.service';

import 'rxjs/add/operator/toPromise';

//model
import { Coordinates } from '../../model/coordinates';
import { Brother } from '../../model/brother';

//To-do
// break this down

@Component({
  selector: 'logged-in',
  templateUrl: '../../../../src/app/components/loggedin/loggedin.component.html',
  styleUrls: ['../../../../src/app/components/loggedin/loggedin.component.css']
})
export class LoggedInComponent {

	//add X in input
  	brothers: Brother[];
    //search input
    filteredBrothers: any[] = [];
    brother: string;
    //filter by Library
    libraries: any[];
    selectedLib: String;

    //Observable

    constructor(private geoLocationService:GeoLocationService){

        this.brothers = [{name: 'Sebastian', location: "London Library"},{name: 'Christopher', location: "USA Library"},{name:'Kevin', location: "Rome Library"},
                         {name:'Josue', location: "London Library"},{name: 'Juan', location: "USA Library"},{name: 'Eddy', location: "Mexico Library"},
                         {name: 'Jose', location: "London Library"},{name: 'Isaac', location: "USA Library"},{name: 'Juan-luis', location: "Mexico Library"}];

        this.libraries = [{label:'Select Library', value:null},{label:'Rome', value: {name: 'Rome'} },{label:'london', value:{name: 'London'} },{label:'USA', value:{name: 'USA'} },{label:'Mexico', value:{name: 'Mexico'} }];


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
            if(brother.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
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


    libraryFilter(event: any){
        console.log("filter by " + event.value.name);
        this.selectedLib = event.value.name;
        //put this in a new function
        let i: number;
        for(i=0; i < this.brothers.length; i++){
            console.log("info: " + this.brothers[i].location + " : " + event.value.name);
            if(this.brothers[i].location == event.value.name)
                console.log("brothers: " + this.brothers[i].name);
        }
    }
}