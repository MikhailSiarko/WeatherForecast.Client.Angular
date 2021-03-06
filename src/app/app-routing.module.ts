import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForecastComponent} from './components/forecast';
import {LoginComponent} from './components/account/login/login.component';
import {RegisterComponent} from './components/account/register/register.component';
import {AuthenticationGuard} from './guards';


const routes: Routes = [
  {path: '', redirectTo: 'forecast', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forecast', component: ForecastComponent, canActivate: [AuthenticationGuard]},
  {path: '**', redirectTo: 'forecast'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
