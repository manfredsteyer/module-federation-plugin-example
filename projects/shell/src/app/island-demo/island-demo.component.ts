import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperConfig } from '../wrapper/wrapper-config';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-island-demo',
  standalone: true,
  imports: [CommonModule, WrapperComponent],
  templateUrl: './island-demo.component.html',
  styleUrls: ['./island-demo.component.css']
})
export class IslandDemoComponent {
  config: WrapperConfig = {
    remoteName: 'mfe2',
    exposedModule: './web-components',
    elementName: 'mfe2-root',
    fragmentUrl: 'http://localhost:4202/assets/prerendered.html'
  };
}
