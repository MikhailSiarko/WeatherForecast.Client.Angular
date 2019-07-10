import {Component, OnDestroy, AfterViewChecked} from '@angular/core';
import {ForecastService} from '../../services';
import {Forecast} from '../../models';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements AfterViewChecked, OnDestroy {
  forecast: Forecast;
  carousel: M.Carousel;
  loading: boolean;

  initializeCarousel = () => {
    const elem = document.querySelectorAll('.carousel.carousel-slider')[0];
    this.carousel = M.Carousel.init(elem, {fullWidth: true, indicators: true});
  }

  constructor(private forecastService: ForecastService) {
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.carousel.destroy();
    this.carousel = null;
  }

  ngAfterViewChecked(): void {
    if (this.forecast && !this.carousel) {
      this.initializeCarousel();
    }
  }

  getForecast(location: string) {
    this.loading = true;
    this.forecastService.fetch(location)
      .subscribe(forecast => {
        this.forecast = forecast;
        this.loading = false;
        if(this.carousel) {
          this.carousel.destroy();
          this.carousel = null;
        }
      });
  }

  date(dateString: string) {
    return new Date(dateString).toLocaleDateString();
  }
}
