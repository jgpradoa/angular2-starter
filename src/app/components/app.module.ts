import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LogInModule } from '../components/login/login.module';

// Imports for loading & configuring the in-memory web api
import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/navBar.Component';
import { BrotherSearchComponent } from '../components/search/brotherSearch.component';
import { LoggedInComponent } from '../components/loggedin/loggedin.component';

// Add the RxJS Observable operators we need in this app.
import '../rxjs-operators';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogInModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    BrotherSearchComponent,
    LoggedInComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}