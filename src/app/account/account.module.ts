import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';
import {MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AccountRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [AccountService],
  exports: []
})
export class AccountModule { }
