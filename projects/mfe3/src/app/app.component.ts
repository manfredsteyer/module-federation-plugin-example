import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authInfo } from '@demo/auth';
import { connectRouter } from './connect-router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {

  constructor() {
    connectRouter();
  }

  ngOnInit(): void {
    console.log('userName', authInfo.userName);
  }
}
