import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFlightsComponent } from './your-flights.component';

describe('YourFlightsComponent', () => {
  let component: YourFlightsComponent;
  let fixture: ComponentFixture<YourFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourFlightsComponent]
    });
    fixture = TestBed.createComponent(YourFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
