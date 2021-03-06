import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
