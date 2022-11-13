import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSwitcherComponent } from './location-switcher.component';

describe('LocationSwitcherComponent', () => {
  let component: LocationSwitcherComponent;
  let fixture: ComponentFixture<LocationSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
