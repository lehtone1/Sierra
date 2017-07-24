import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LinkListComponent } from './link-list/link-list.component';
import { HeaderComponent } from './header/header.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { SaunaScheduleComponent } from './sauna-schedule/sauna-schedule.component';
import { SaunaReservationComponent } from './sauna-reservation/sauna-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AnnouncementsListComponent,
    ContactListComponent,
    LinkListComponent,
    HeaderComponent,
    BuyBookComponent,
    SaunaScheduleComponent,
    SaunaReservationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
