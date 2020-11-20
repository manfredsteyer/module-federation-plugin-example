import { Component, OnInit } from '@angular/core';
import { SharedLibService } from './shared-lib.service';

@Component({
  selector: 'lib-shared-lib',
  template: `
    <p>
      Data: {{data}}
    </p>
  `,
  styles: [
  ]
})
export class SharedLibComponent implements OnInit {

  data = this.service.data;

  constructor(private service: SharedLibService) { }

  ngOnInit(): void {
  }

}
