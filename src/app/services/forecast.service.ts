import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coordinates } from '../interfaces/Coordinates';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  // see open-meteos docs for more info: https://open-meteo.com/en/docs
  private params = {
    latitude: -35.282,
    longitude: 149.1286,
    daily: 'weathercode,temperature_2m_max,temperature_2m_min',
    current_weather: true,
    timezone: 'auto',
  };

  constructor(private http: HttpClient) {}

  private getParamsAsQueryString(): string {
    return (
      '?' +
      Object.keys(this.params)
        // @ts-ignore: remap to query requires type change
        .map((k) => `${k}=${this.params[k]}`)
        .join('&')
    );
  }

  private getForecastPath(): string {
    return `${
      environment.forecastApiBasePath
    }/${this.getParamsAsQueryString()}`;
  }

  getForecast(coords: Coordinates): Observable<any> {
    this.params.latitude = coords.latitude;
    this.params.longitude = coords.longitude;

    return this.http.get(this.getForecastPath());
  }
}
