import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent {
  @Input() city: string;
  @Input() countryCode: string;
}
