import {HttpClient} from '@angular/common/http';
import {ApiUrlsService} from '../api-urls.service';
import {Forecast} from '../models';

export class ForecastService {
  constructor(private http: HttpClient, private apiUrlsService: ApiUrlsService) {
  }

  fetch(location: string) {
    return this.http.get<Forecast>(this.apiUrlsService.getForecast(location));
  }
}
