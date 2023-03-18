import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent implements OnInit {
  constructor(private service: AuthLibService,
    private http: HttpClient) {
    console.log('User Name', this.service.user);

  }

  flights: unknown;

  ngOnInit(): void {
    this
      .http
      .get('https://demo.angulararchitects.io/api/flight/3376')
      .subscribe(flights => this.flights = flights);

  }
}
