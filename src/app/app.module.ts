import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { HeaderComponent } from './header/header.component';
import { QueryComponent } from './query/query.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    HeaderComponent,
    QueryComponent,
    QueryparameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
