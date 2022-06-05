import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentToChildCommunicationComponent } from './parent-to-child-communication/parent-to-child-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildCommunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
