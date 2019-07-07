import {Component} from '@angular/core';
import {ForecastService} from '../../services';
import {Forecast} from '../../models';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  forecast: Forecast;
  location: string;

  constructor(private forecastService: ForecastService) {
  }

  getForecast() {
    this.forecastService.fetch(this.location).subscribe(forecast => this.forecast = forecast);
  }
}
