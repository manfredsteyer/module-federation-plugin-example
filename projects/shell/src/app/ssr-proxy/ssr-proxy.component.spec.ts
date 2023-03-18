import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrProxyComponent } from './ssr-proxy.component';

describe('SsrProxyComponent', () => {
  let component: SsrProxyComponent;
  let fixture: ComponentFixture<SsrProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsrProxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
