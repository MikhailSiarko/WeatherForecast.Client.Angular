export class Forecast {
  id: number;
  country: string;
  name: string;
  updated: string;
  items: ForecastItem[];
}

export class ForecastItem {
  id: number;
  forecastId: number;
  date: string;
  timeItems: ForecastTimeItem[];
}

export class ForecastTimeItem {
  forecastId: number;
  time: string;
  main: Main;
  weather: Weather;
  wind: Wind;
}

export class Main {
  id: number;
  temp: number;
  minTemp: number;
  maxTemp: number;
  pressure: number;
  humidity: number;
}

export class Wind {
  id: number;
  speed: number;
  degree: number;
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
