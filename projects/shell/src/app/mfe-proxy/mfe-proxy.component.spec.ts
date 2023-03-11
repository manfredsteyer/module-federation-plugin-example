import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeProxyComponent } from './mfe-proxy.component';

describe('MfeProxyComponent', () => {
  let component: MfeProxyComponent;
  let fixture: ComponentFixture<MfeProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeProxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
