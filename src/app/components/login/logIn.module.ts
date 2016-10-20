import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { LogInRoutingModule } from './router/login-routing.module';


import { LogInComponent } from './components/login.component';
import { ForgotPassComponent } from './components/forgotpass.component';

import { LoginService } from './services/login.service';
import { ForgotPassService } from './services/forgotPass.service';


@NgModule({
  imports: [
    FormsModule,
    LogInRoutingModule
  ],
  declarations: [
    LogInComponent,
    ForgotPassComponent
  ],
  providers: [
    LoginService,
    ForgotPassService
  ]
})
export class LogInModule {
}