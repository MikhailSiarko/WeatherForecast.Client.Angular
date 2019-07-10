import {ForecastTimeItem} from '../../../models';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-time-item-collection',
  templateUrl: './time-item-collection.component.html'
})
export class TimeItemCollectionComponent {
  @Input() timeItems: ForecastTimeItem[];
}
