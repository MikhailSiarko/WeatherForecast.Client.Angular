export class Forecast {
  id: number;
  countryCode: string;
  city: string;
  updated: string;
  items: ForecastItem[];
}

export class ForecastItem {
  id: number;
  forecastId: number;
  date: string;
  main: Main;
  weather: Weather[];
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
}
