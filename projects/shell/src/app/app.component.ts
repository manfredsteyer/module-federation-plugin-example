import { Component } from '@angular/core';
import { AuthService } from 'auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(authService: AuthService) {
    authService.userName = 'Jane Doe';
  }
}

