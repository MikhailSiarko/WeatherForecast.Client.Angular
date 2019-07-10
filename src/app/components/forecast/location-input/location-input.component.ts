import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input-component.html',
  styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent {
  location: string = null;
  @Input() loading = false;
  @Output() search = new EventEmitter<string>();

  click(event: any) {
    event.preventDefault();
    this.search.emit(this.location);
  }
}
