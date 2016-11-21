import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LogInRoutingModule } from './router/login-routing.module';


import { LogInComponent } from './components/login.component';
import { ForgotPassComponent } from './components/forgotpass.component';

import { ForgotPassService } from './services/forgotPass.service';


import { MaterialModule } from '@angular/material';

import { MessagesModule } from 'primeng/primeng';

@NgModule({
  imports: [
    FormsModule,
    LogInRoutingModule,
    MessagesModule,
    HttpModule,
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