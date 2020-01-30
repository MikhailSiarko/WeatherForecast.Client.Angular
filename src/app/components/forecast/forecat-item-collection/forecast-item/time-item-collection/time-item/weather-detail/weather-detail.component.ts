import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent {
  @Input() temp: number;
  @Input() humidity: number;
  @Input() pressure: number;
  @Input() wind: number;
}
