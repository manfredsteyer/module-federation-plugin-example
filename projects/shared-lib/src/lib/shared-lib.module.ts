import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';



@NgModule({
  declarations: [SharedLibComponent, OtherComponent],
  imports: [
    AuthLibModule,
  ],
  exports: [SharedLibComponent, OtherComponent]
})
export class SharedLibModule { }
