import {Component} from '@angular/core';
import { AuthLibService } from './../../../../../auth-lib/src/lib/auth-lib.service';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }
}
