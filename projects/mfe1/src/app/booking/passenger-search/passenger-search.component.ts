import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}
