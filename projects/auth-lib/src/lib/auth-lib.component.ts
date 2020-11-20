import { Component, OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'auth-lib-demo',
  template: `
    <p>
      Data: {{data}}
    </p>
  `
})
export class AuthLibComponent implements OnInit {

  data = this.service.data;

  constructor(private service: AuthLibService) { }

  ngOnInit(): void {
  }

}
