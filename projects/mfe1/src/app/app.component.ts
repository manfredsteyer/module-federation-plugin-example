import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  auth = inject(AuthService);

  ngOnInit(): void {
    console.log('userName', this.auth.userName);
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}
