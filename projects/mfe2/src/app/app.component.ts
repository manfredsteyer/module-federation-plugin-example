import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { authInfo } from '@demo/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('userName', authInfo.userName);
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}
