import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../account/account.component.scss']
})
export class LoginComponent {
  login: string = null;
  password: string = null;

  constructor(private accountService: AccountService) {
  }

  onSubmit() {
    this.accountService.login(this.login, this.password);
  }
}
