// projects/shell/src/app/programmatic-loading/programmatic-loading.component.ts

import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-programmatic-loading',
  standalone: true,
  templateUrl: './programmatic-loading.component.html',
  styleUrls: ['./programmatic-loading.component.css']
})
export class ProgrammaticLoadingComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  async load(): Promise<void> {

      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './Component'
      });
      
      const ref = this.viewContainer.createComponent(m.MyTicketsComponent);
      // const compInstance = ref.instance;
  }

}
