import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ForecastComponent} from './components/forecast/forecast.component';
import {LoginComponent} from './components/account/login/login.component';
import {RegisterComponent} from './components/account/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorInterceptor, JwtInterceptor} from './interceptors';
import {AuthenticationService, ForecastService} from './services';
import {LocationInputComponent} from './components/forecast/location-input/location-input.component';
import {DateHeaderComponent} from './components/forecast/date-header/date-header.component';
import {LocationComponent} from './components/forecast/location/location.component';
import {TimeItemCollectionComponent, TimeItemComponent} from './components/forecast/time-item-collection';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ForecastComponent,
    LoginComponent,
    RegisterComponent,
    LocationInputComponent,
    DateHeaderComponent,
    LocationComponent,
    TimeItemComponent,
    TimeItemCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    ForecastService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
