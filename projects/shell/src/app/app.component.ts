import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService, http: HttpClient) {
    this.service.login('Max', null);

    console.log(typeof window === 'undefined');

  }

}

