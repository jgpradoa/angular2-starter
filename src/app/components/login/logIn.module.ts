import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { LogInRoutingModule } from './router/login-routing.module';


import { LogInComponent } from './components/login.component';
import { ForgotPassComponent } from './components/forgotpass.component';

import { ForgotPassService } from './services/forgotPass.service';


import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    LogInRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    LogInComponent,
    ForgotPassComponent
  ],
  providers: [
    ForgotPassService
  ]
})
export class LogInModule {
}