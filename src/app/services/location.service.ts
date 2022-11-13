import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Coordinates } from 'src/app/interfaces/Coordinates';
import { Location } from '../interfaces/Location';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  supported: boolean = false;
  label: string = '';
  coords: Coordinates = {
    latitude: 0,
    longitude: 0,
  };

  private subject = new Subject<any>();

  constructor() {
    if ('geolocation' in navigator) {
      this.supported = true;
      this.requestGeoLocation();
    } else {
      this.supported = false;
    }
  }

  requestGeoLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.label = 'Current location';
      this.coords = position.coords;
      this.subject.next(this.coords);
    });
  }

  getCoords(): Observable<any> {
    return this.subject.asObservable();
  }

  setLocation(location: Location) {
    this.label = location.label;
    this.coords = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.subject.next(this.coords);
  }
}
