import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from '@my/auth-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  userName: string;

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private authLibService: AuthLibService,
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) {

  
      this.userName = authLibService.userName;

  }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    import('../lazy/lazy.component')
      .then(m => m.LazyComponent)
      .then(comp => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });

  }


}
