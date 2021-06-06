import { Component, NgZone } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { shareNgZone } from '@angular-architects/module-federation-tools';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';
  ngVersion = require('../../../../package.json').dependencies['@angular/core'];

  constructor(private service: AuthLibService, private ngZone: NgZone) {
    shareNgZone(ngZone);
    this.service.login('Max', null);
  }

}

