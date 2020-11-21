import { Component, OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'lib-auth-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.css']
})
export class AuthLibComponent implements OnInit {

  user = this.service.user;

  constructor(private service: AuthLibService) {

  }

  ngOnInit(): void {
  }

}
