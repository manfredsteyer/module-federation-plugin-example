import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackagesComponent } from './holiday-packages.component';

describe('HolidayPackagesComponent', () => {
  let component: HolidayPackagesComponent;
  let fixture: ComponentFixture<HolidayPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HolidayPackagesComponent]
    });
    fixture = TestBed.createComponent(HolidayPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
