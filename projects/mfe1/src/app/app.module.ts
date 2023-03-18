import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { TransferState } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'mfe1' }),
    HttpClientModule,
    FlightsModule,
    TransferHttpCacheModule,
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
