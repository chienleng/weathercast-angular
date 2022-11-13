import { Component, Input, OnInit } from '@angular/core';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { DailyForecast } from 'src/app/interfaces/Forecast';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.css'],
})
export class WeatherForecastsComponent implements OnInit {
  @Input() forecasts: DailyForecast[] = [];

  constructor() {}

  ngOnInit(): void {}

  getDayOfWeek(dateString: string): string {
    const d = parse(dateString, 'yyyy-MM-dd', new Date());
    return format(d, 'E');
  }
}
