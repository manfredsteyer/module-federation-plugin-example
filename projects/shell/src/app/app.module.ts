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
import { MfeProxyComponent } from './mfe-proxy/mfe-proxy.component';
// import { SharedLibModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AuthLibModule,
    // SharedLibModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES, {
    initialNavigation: 'enabledBlocking'
})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MfeProxyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
