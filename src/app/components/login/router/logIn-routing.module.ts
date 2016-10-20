import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogInComponent } from '../components/login.component';
import { ForgotPassComponent } from '../components/forgotpass.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LogInComponent },
      { path: 'forgotpassword', component: ForgotPassComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LogInRoutingModule {}