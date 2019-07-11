import {Component, Input} from '@angular/core';
import {ForecastTimeItem} from '../../../../../../models';

@Component({
  selector: 'app-time-item',
  templateUrl: './time-item.component.html',
  styleUrls: ['./time-item.component.scss']
})
export class TimeItemComponent {
  @Input() timeItem: ForecastTimeItem;
}
