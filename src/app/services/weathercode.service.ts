import { Injectable } from '@angular/core';
import WeatherCodeDict from '../dictionary/WeatherCodes';
import { WeatherCode } from '../interfaces/WeatherCode';

@Injectable({
  providedIn: 'root',
})
export class WeathercodeService {
  private weatherCodes: WeatherCode[] = WeatherCodeDict;

  constructor() {}

  private findWeatherCode(code: number): WeatherCode | undefined {
    return this.weatherCodes.find((c) => c.code.includes(code.toString()));
  }

  getWeatherDescription(code: number): string {
    const weatherCode = this.findWeatherCode(code);
    return weatherCode ? weatherCode.description : code.toString();
  }

  getWeatherImage(code: number): string {
    const weatherCode = this.findWeatherCode(code);
    return weatherCode ? weatherCode.imagePath : '';
  }

  getWeatherIcon(code: number): string {
    const weatherCode = this.findWeatherCode(code);
    return weatherCode ? weatherCode.iconClass : '';
  }
}
