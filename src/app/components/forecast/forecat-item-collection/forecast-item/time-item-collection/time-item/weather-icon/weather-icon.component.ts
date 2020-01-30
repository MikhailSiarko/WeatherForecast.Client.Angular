import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html'
})
export class WeatherIconComponent {
  @Input() description: string;
  @Input() main: string;
  @Input() iconUrl: string;
  get title() {
    return `${this.main} (${this.description})`;
  }
}
