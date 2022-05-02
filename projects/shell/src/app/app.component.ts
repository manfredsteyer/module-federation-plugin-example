import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
}

