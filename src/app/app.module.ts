
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { SaunaReservationComponent } from './sauna/sauna-reservation/sauna-reservation.component';
import { SaunaScheduleComponent } from './sauna/sauna-schedule/sauna-schedule.component';
import { GarageComponent } from './announcement/side-box/garage/garage.component';
import { LinkListComponent } from './announcement/side-box/link-list/link-list.component';
import { SideBoxComponent } from './announcement/side-box/side-box.component';
import { BuyBookComponent } from './announcement/side-box/buy-book/buy-book.component';
import { AnnouncementsListComponent } from './announcement/announcements-list/announcements-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    HeaderComponent,
    AnnouncementsListComponent,
    BuyBookComponent,
    SideBoxComponent,
    LinkListComponent,
    GarageComponent,
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
