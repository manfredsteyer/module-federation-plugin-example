import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibService } from 'shared-lib';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ThatModule { 

  constructor(shared: SharedLibService) {
    shared.info.push('ThatModule');
  }

}
