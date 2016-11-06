import { Component } from '@angular/core';

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

    constructor(){
        this.filteredBrothers = this.brothers;
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