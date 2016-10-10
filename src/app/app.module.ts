import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    provideAuth({
      tokenGetter: () => { return window.sessionStorage.getItem('id_token'); },
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true,
      noTokenScheme: true
    })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
