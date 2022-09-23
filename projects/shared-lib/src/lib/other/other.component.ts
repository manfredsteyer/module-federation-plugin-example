import { Component, OnInit } from '@angular/core';
import { AuthLibService } from '../../../../auth-lib/src/lib/auth-lib.service';

@Component({
  selector: 'lib-other',
  template: '<p>User: {{user}}</p>',
  // styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  // user = 'A';
  user = this.service.user;
  constructor(private service: AuthLibService) { }

  ngOnInit(): void {
  }

}
