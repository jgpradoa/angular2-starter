import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanActivateUser } from '../guards/can-activate-user.guard';

import { LoggedInComponent } from '../components/loggedin/loggedin.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoggedInComponent, canActivate: [CanActivateUser]}
    ])
  ],
  providers: [
    CanActivateUser
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}