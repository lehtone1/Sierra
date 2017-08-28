import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { SaunaReservationComponent } from './other/sauna-reservation/sauna-reservation.component';
import { AnnouncementsListComponent } from './announcement/announcements-list/announcements-list.component';
import { LinkListComponent } from './other/link-list/link-list.component';
import { GarageComponent } from './other/garage/garage.component';
import { BuyBookComponent } from './other/buy-book/buy-book.component';
import { FooterComponent } from './footer/footer.component';
import { AnnouncementEmailComponent } from './announcement/announcement-email/announcement-email.component';



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
    SaunaReservationComponent,
    FooterComponent,
    AnnouncementEmailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
