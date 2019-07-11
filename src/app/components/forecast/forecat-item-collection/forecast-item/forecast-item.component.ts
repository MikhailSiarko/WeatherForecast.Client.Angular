import {Component, Input} from '@angular/core';
import {ForecastItem} from '../../../../models';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html'
})
export class ForecastItemComponent {
  @Input() item: ForecastItem;
}
