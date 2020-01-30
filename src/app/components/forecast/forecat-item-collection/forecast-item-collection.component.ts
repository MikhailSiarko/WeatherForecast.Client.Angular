import {Component, Input} from '@angular/core';
import {ForecastItem} from '../../../models';

@Component({
  selector: 'app-item-collection',
  templateUrl: './forecast-item-collection.component.html'
})
export class ForecastItemCollectionComponent {
  @Input() items: ForecastItem[];
}
