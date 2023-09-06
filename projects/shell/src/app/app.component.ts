import { Component, NgZone, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authInfo } from '@demo/auth';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor() {
    authInfo.userName = 'Jane Doe';
    globalThis.ngZone = inject(NgZone);
  }
}

