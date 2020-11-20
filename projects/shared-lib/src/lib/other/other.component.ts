import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'lib-other',
  template: '<p>USer: {{user}}</p>'
})
export class OtherComponent implements OnInit {

  // user = 'A';
  user = this.service.user;
  constructor(private service: AuthLibService) { }

  ngOnInit(): void {
  }

}
