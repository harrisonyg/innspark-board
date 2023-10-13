import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { DashCardsComponent } from './cards/dash-cards/dash-cards.component';
import { ChartCardsComponent } from './cards/chart-cards/chart-cards.component';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CardsComponent,
    DashCardsComponent,
    ChartCardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
