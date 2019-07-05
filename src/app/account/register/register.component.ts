import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../account.component.scss']
})
export class RegisterComponent {
  login: string = null;
  password: string = null;
  confirmPassword: string = null;

  constructor(private accountService: AccountService) {
  }

  onSubmit() {
    this.accountService.register(this.login, this.password, this.confirmPassword);
  }
}
