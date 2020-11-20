import { Component, OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'lib-auth-lib',
  template: `
    <p>
      User: {{user}}
    </p>
  `
})
export class AuthLibComponent implements OnInit {

  user = this.service.user;

  constructor(private service: AuthLibService) {

  }

  ngOnInit(): void {
  }

}
