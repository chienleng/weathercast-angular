import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import Locations from 'src/app/dictionary/Locations';
import { Location } from 'src/app/interfaces/Location';

@Component({
  selector: 'app-location-switcher',
  templateUrl: './location-switcher.component.html',
  styleUrls: ['./location-switcher.component.css'],
})
export class LocationSwitcherComponent implements OnInit {
  @Output() onSwitcherClose: EventEmitter<any> = new EventEmitter();
  @Output() onLocationSelect: EventEmitter<string> = new EventEmitter();
  locations: Location[] = Locations;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {}

  onClose() {
    this.onSwitcherClose.emit();
  }

  onSelect(location: Location) {
    this.onSwitcherClose.emit();
    this.locationService.setLocation(location);
  }

  onSelectCurrent() {
    this.onSwitcherClose.emit();
    this.locationService.requestGeoLocation();
  }
}
