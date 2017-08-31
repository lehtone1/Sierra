 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { SaunaComponent } from './other/sauna.component';
 import { AnnouncementComponent } from './announcement/announcement.component';
 import { ContactComponent } from './contact/contact.component';

 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'announcement' },
   { path: 'announcement', component: AnnouncementComponent },
   { path: 'sauna', component: SaunaComponent },
   { path: 'contact', component: ContactComponent },
 ];


 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }

 export const routingComponents = [AnnouncementComponent, SaunaComponent, ContactComponent];

