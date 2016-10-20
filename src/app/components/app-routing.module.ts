import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoggedInComponent } from '../components/loggedin/loggedin.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoggedInComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}