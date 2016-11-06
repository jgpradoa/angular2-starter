import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: '../../../../src/app/components/navBar/navBar.Component.html',
  styleUrls: ['../../../../src/app/components/navBar/navBar.Component.css']
})
export class NavBarComponent implements OnInit {
  user: boolean; //make object

  constructor(private userService: UserService){ }

  ngOnInit() { 
  	//make it observable
  	this.user = this.userService.isLoggedIn();
  }

}