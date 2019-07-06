import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AccountRoutingModule
  ],
  providers: [AccountService],
  exports: []
})
export class AccountModule { }
