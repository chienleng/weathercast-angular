import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-background',
  templateUrl: './weather-background.component.html',
  styleUrls: ['./weather-background.component.css'],
})
export class WeatherBackgroundComponent implements OnInit {
  @Input() imagePath: string = '';

  constructor() {}

  ngOnInit(): void {}
}
