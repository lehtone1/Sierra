 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { ImportantDocumentsComponent } from './important-documents/important-documents.component';
 import { ReservationsAndOrdersComponent } from './reservations-and-orders/reservations-and-orders.component';
 import { AnnouncementComponent } from './announcement/announcement.component';
 import { ContactComponent } from './contact/contact.component';

 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'announcement' },
   { path: 'announcement', component: AnnouncementComponent },
   { path: 'important-documents', component: ImportantDocumentsComponent },
   { path: 'reservations-and-orders', component: ReservationsAndOrdersComponent},
   { path: 'contact', component: ContactComponent },
 ];


 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }

 export const routingComponents = [AnnouncementComponent, ImportantDocumentsComponent, ReservationsAndOrdersComponent, ContactComponent];

