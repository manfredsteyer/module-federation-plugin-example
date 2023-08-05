import {Component} from '@angular/core';
import { AuthService } from 'auth';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {

  constructor(authService: AuthService) {
    console.log('userName!!', authService.userName);
  }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}
