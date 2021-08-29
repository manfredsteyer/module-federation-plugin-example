import { Compiler, Component, Injector, NgModuleFactory, NgModuleRef, OnInit, Optional } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibComponent, SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private share: SharedLibService,
    private injector: Injector,
    @Optional() private compiler: Compiler) {

  }

  ngOnInit() {
  }

  async loadThisModule() {
    import('mfe1/this').then(m => m.ThisModule).then(moduleOrFactory => {
        if (moduleOrFactory instanceof NgModuleFactory) {
            return moduleOrFactory;
        } else {
            return this.compiler.compileModuleAsync(moduleOrFactory);
        }
    })
    .then(factory => {
        const moduleRef = factory.create(this.injector);
    });

  }

  loadThatModule() {
    import('mfe1/that').then(m => m.ThatModule).then(moduleOrFactory => {
      if (moduleOrFactory instanceof NgModuleFactory) {
          return moduleOrFactory;
      } else {
          return this.compiler.compileModuleAsync(moduleOrFactory);
      }
  })
  .then(factory => {
      const moduleRef = factory.create(this.injector).instance as unknown as NgModuleRef<any>;
    });
  }

  show() {
    console.debug('share.info', this.share.info)
  }


}
