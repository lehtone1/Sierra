import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { SaunaReservationComponent } from './reservations-and-orders/sauna-reservation/sauna-reservation.component';
import { AnnouncementsListComponent } from './announcement/announcements-list/announcements-list.component';
import { LinkListComponent } from './important-documents/link-list/link-list.component';
import { GarageComponent } from './reservations-and-orders/garage/garage.component';
import { BuyBookComponent } from './reservations-and-orders/buy-book/buy-book.component';
import { FooterComponent } from './footer/footer.component';
import { AnnouncementEmailComponent } from './announcement/announcement-email/announcement-email.component';
import { ReservationsAndOrdersComponent } from './reservations-and-orders/reservations-and-orders.component';
import { ImportantDocumentsComponent } from './important-documents/important-documents.component';



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
    AnnouncementEmailComponent,
    ReservationsAndOrdersComponent,
    ImportantDocumentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [[{provide: LocationStrategy, useClass: HashLocationStrategy}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
