import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherBackgroundComponent } from './components/weather-background/weather-background.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherForecastsComponent } from './components/weather-forecasts/weather-forecasts.component';
import { MapComponent } from './components/map/map.component';
import { LocationSwitcherComponent } from './components/location-switcher/location-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherBackgroundComponent,
    CurrentWeatherComponent,
    WeatherForecastsComponent,
    MapComponent,
    LocationSwitcherComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
