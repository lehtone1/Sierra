import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { SaunaReservationComponent } from './sauna/sauna-reservation/sauna-reservation.component';
import { SaunaScheduleComponent } from './sauna/sauna-schedule/sauna-schedule.component';
import { AnnouncementsListComponent } from './announcement/announcements-list/announcements-list.component';
import { LinkListComponent } from './sauna/link-list/link-list.component';
import { GarageComponent } from './sauna/garage/garage.component';
import { BuyBookComponent } from './sauna/buy-book/buy-book.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    HeaderComponent,
    AnnouncementsListComponent,
    BuyBookComponent,
    GarageComponent,
    LinkListComponent,
    SaunaScheduleComponent,
    SaunaReservationComponent,
    ContactListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
