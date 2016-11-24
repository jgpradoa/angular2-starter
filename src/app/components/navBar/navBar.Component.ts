import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: '../../../../src/app/components/navBar/navBar.Component.html',
  styleUrls: ['../../../../src/app/components/navBar/navBar.Component.css']
})
export class NavBarComponent implements OnInit {
  user: boolean; //make object
  showSideNav: boolean = false;

  constructor(private userService: UserService, private router: Router){ }

  ngOnInit() { 
  	//make it observable
    this.user = true;
  	this.userService.loginObs().subscribe(
                                          function (loggedIn) {
                                              console.log('Next: ' + loggedIn.toString());
                                              this.user = loggedIn;
                                          },
                                          function (err) {
                                              console.log('Error: ' + err);
                                          },
                                          function () {
                                              console.log('Completed');
                                          });
  }

  toggleNav(){
  	this.showSideNav = !this.showSideNav;
  }

  signOff(){
  	this.userService.logout();
  	this.router.navigate(['/login']);
  }
}