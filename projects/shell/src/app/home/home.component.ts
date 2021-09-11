import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isAuthenticated$ = this.auth.isAuthenticated$;
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

}
