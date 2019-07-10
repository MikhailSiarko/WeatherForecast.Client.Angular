import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-date-header',
  templateUrl: './date-header.component.html'
})
export class DateHeaderComponent {
  @Input() date: string;
  get dateFormat() {
    if(this.date) {
      return new Date(this.date).toLocaleDateString();
    }
    return '';
  }
}
