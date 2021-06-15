import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { AuthLibService } from '@my/auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(authLibService: AuthLibService) {
    authLibService.login('Manfred', null);
  }
}

