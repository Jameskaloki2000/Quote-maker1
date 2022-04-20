import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './component/quote-form/quote-form.component';
import { QuoteDetailsComponent } from './component/quote-details/quote-details.component';
import { QuoteComponent } from './component/quote/quote.component';
import { VotesComponent } from './component/votes/votes.component';
import { TimePipe } from './model/time.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    VotesComponent,
    TimePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
