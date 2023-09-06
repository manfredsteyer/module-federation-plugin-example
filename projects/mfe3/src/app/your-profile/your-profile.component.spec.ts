import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProfileComponent } from './your-profile.component';

describe('YourProfileComponent', () => {
  let component: YourProfileComponent;
  let fixture: ComponentFixture<YourProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourProfileComponent]
    });
    fixture = TestBed.createComponent(YourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
