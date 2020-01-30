import {NgModule} from '@angular/core';
import {ForecastComponent} from './forecast.component';
import {DateHeaderComponent} from './date-header/date-header.component';
import {LocationComponent} from './location/location.component';
import {
  TimeItemComponent,
  WeatherDetailComponent,
  WeatherIconComponent
} from './forecat-item-collection/forecast-item/time-item-collection/time-item';
import {TimeItemCollectionComponent} from './forecat-item-collection/forecast-item/time-item-collection';
import {ForecastItemCollectionComponent} from './forecat-item-collection/forecast-item-collection.component';
import {ForecastItemComponent} from './forecat-item-collection/forecast-item';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ForecastService} from './forecast.service';
import {LocationInputComponent} from './location-input/location-input.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ForecastComponent,
    DateHeaderComponent,
    LocationComponent,
    TimeItemComponent,
    TimeItemCollectionComponent,
    WeatherIconComponent,
    WeatherDetailComponent,
    ForecastItemCollectionComponent,
    ForecastItemComponent,
    LocationInputComponent
  ],
  exports: [
    ForecastComponent,
    DateHeaderComponent,
    LocationComponent,
    TimeItemComponent,
    TimeItemCollectionComponent,
    WeatherIconComponent,
    WeatherDetailComponent,
    ForecastItemCollectionComponent,
    ForecastItemComponent,
    LocationInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ForecastService
  ]
})
export class ForecastModule {

}
