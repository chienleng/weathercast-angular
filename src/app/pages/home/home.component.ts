import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { ForecastService } from 'src/app/services/forecast.service';
import { WeathercodeService } from 'src/app/services/weathercode.service';
import { Coordinates } from 'src/app/interfaces/Coordinates';
import { CurrentWeather, DailyForecast } from 'src/app/interfaces/Forecast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  coords: Coordinates = {
    latitude: 0,
    longitude: 0,
  };
  currentWeather: CurrentWeather = {
    temperature: 0,
    temperatureUnit: '°C',
    time: '',
    weatherCode: 0,
    temperatureMin: 0,
    temperatureMax: 0,
  };
  dailyForecasts: DailyForecast[] = [];
  subscription: Subscription;
  showSwitcher: boolean = false;

  constructor(
    private locationService: LocationService,
    private forecastService: ForecastService,
    private weathercodeService: WeathercodeService
  ) {
    /**
     * retreive browser coords, then fetch forecast based on coords
     */
    this.subscription = this.locationService.getCoords().subscribe((coords) => {
      this.coords = coords;
      this.forecastService.getForecast(coords).subscribe((res) => {
        if (res.daily && res.current_weather) {
          this.dailyForecasts = this.transformDailyForecast(res.daily);
          this.setCurrentWeather(res.current_weather, this.dailyForecasts[0]);
        } else {
          console.error('response do not contain the correct properties.');
        }
      });
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /** TODO: test */
  setCurrentWeather(currentWeather: any, dailyForecast: DailyForecast) {
    this.currentWeather.temperature = currentWeather.temperature;
    this.currentWeather.time = currentWeather.time;
    this.currentWeather.weatherCode = currentWeather.weathercode;
    this.currentWeather.temperatureMin = dailyForecast.temperatureMin;
    this.currentWeather.temperatureMax = dailyForecast.temperatureMax;
  }

  /** TODO: test */
  transformDailyForecast(daily: any): DailyForecast[] {
    const dailyForecasts: DailyForecast[] = [];

    daily['time'].forEach((time: string, index: number) => {
      dailyForecasts.push({
        time,
        temperatureMax: daily['temperature_2m_max'][index],
        temperatureMin: daily['temperature_2m_min'][index],
        weatherCode: daily['weathercode'][index],
        weatherIcon: this.getWeatherIcon(daily['weathercode'][index]),
        weatherDescription: this.getWeatherDescription(
          daily['weathercode'][index]
        ),
      });
    });

    return dailyForecasts;
  }

  getWeatherDescription(code: number): string {
    return this.weathercodeService.getWeatherDescription(code);
  }

  getWeatherImage(code: number): string {
    return this.weathercodeService.getWeatherImage(code);
  }

  getWeatherIcon(code: number): string {
    return this.weathercodeService.getWeatherIcon(code);
  }

  getLocationLabel() {
    return this.locationService.label;
  }

  onMenuClick() {
    this.showSwitcher = true;
  }
}
