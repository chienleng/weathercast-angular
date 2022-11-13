import { Component, Input, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/interfaces/Coordinates';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() unit: string = '';
  @Input() weatherDescription: string = '';
  @Input() weatherIcon: string = '';
  @Input() coords: Coordinates = {
    latitude: 0,
    longitude: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
