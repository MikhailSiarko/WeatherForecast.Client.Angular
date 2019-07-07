import {Component} from '@angular/core';
import {AuthenticationService} from './services';
import {SidebarItem} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get routes() {
    return this.authenticationService.user ? [
      new SidebarItem('Logout', undefined, () => this.authenticationService.logout())
    ] : [
      new SidebarItem('Login', '/login'),
      new SidebarItem('Register', '/register')
    ];
  }

  constructor(private authenticationService: AuthenticationService) {
  }
}
