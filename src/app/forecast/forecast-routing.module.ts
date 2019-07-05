import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'forecast', component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
