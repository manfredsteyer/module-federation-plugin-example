import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@softarc/native-federation-runtime';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);

  async ngOnInit() {
    await loadRemoteModule('mfe2', './web-components');
    const root = document.createElement('mfe2-root');
    this.elm.nativeElement.appendChild(root);
  }
}
