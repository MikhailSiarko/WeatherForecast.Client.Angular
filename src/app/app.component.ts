import { Component } from '@angular/core';
import { UserModel } from './authentication.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: UserModel;
}
