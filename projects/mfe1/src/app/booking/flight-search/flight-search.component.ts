import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}
