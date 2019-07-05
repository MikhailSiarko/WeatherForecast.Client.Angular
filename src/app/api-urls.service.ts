import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {
  port = 5000;
  baseUrl = `http://localhost:${this.port}/api`;
  login = `${this.baseUrl}/account/login`;
  register = `${this.baseUrl}/account/register`;
  getForecast = (city: string) => `${this.baseUrl}/forecast/${city}`;
}
