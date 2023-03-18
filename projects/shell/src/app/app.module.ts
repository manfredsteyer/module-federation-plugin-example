import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLibModule } from 'auth-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SsrProxyComponent } from './ssr-proxy/ssr-proxy.component';
// import { SharedLibModule } from 'projects/shared-lib/src/public-api';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { IslandComponent } from './island/island.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),

    AuthLibModule,
    // SharedLibModule,
    HttpClientModule,
    FormsModule,
    TransferHttpCacheModule,
    RouterModule.forRoot(APP_ROUTES, {
    initialNavigation: 'enabledBlocking'
})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SsrProxyComponent,
    IslandComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
