import { Component, NgZone } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { shareNgZone } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService, private ngZone: NgZone) {
    shareNgZone(ngZone);
    this.service.login('Max', null);
  }

}

