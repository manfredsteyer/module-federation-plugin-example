import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authInfo } from '@demo/auth';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('userName', authInfo.userName);
  }
}
