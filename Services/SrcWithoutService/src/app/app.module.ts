import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesDetailsComponent } from './languages-details/languages-details.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesDetailsComponent,
    LanguagesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
