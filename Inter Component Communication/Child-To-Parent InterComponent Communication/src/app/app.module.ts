import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildToParentCommunicationComponent } from './child-to-parent-communication/child-to-parent-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildToParentCommunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
