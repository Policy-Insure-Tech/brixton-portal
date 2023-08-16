import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuoteRequestComponent } from './components/quote-request/quote-request.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, QuoteRequestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DashboardComponent, QuoteRequestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
