import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { FormsModule } from '@angular/forms';
import { ForecastRoutingModule } from './forecast-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    FormsModule,
    ForecastRoutingModule,
    HttpClientModule
  ]
})
export class ForecastModule { }
