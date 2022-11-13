export interface CurrentWeather {
  temperature: number;
  time: string;
  weatherCode: number;
  temperatureUnit: string;
  temperatureMin: number;
  temperatureMax: number;
}

export interface DailyForecast {
  time: string;
  temperatureMin: number;
  temperatureMax: number;
  weatherCode: number;
  weatherIcon: string;
  weatherDescription: string;
}
