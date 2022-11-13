import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { LocationService } from 'src/app/services/location.service';
import { Coordinates } from 'src/app/interfaces/Coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  marker: mapboxgl.Marker = new mapboxgl.Marker({
    color: '#0369a1',
  });
  style: string = 'mapbox://styles/mapbox/dark-v10';
  subscription: Subscription | undefined;

  constructor(private locationService: LocationService) {
    // @ts-ignore: access token is read-only
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    this.subscription = this.locationService.getCoords().subscribe((coords) => {
      if (this.map) {
        this.update(coords);
      } else {
        this.setup(coords);
      }
    });
  }

  setup(coords: Coordinates) {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [coords.longitude, coords.latitude],
    });

    this.marker.setLngLat([coords.longitude, coords.latitude]).addTo(this.map);
  }

  update(coords: Coordinates) {
    if (this.map) {
      this.map.setCenter([coords.longitude, coords.latitude]);
      this.map.setZoom(9);
      this.marker.setLngLat([coords.longitude, coords.latitude]);
    }
  }
}
