import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holiday-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holiday-packages.component.html',
  styleUrls: ['./holiday-packages.component.css']
})
export class HolidayPackagesComponent {
  search(): void {
    alert('Not implemented in this demo!');
  }
}
