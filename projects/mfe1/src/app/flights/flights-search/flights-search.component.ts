import {Component} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }
}
