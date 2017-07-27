import { Contact } from './contact.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
  new Contact('Hallituksen puheenjohtaja', 'Heikki', 'heikki@lehtonen.fi', '+358 50 1311'),
  new Contact('Hallituksen jäsen', 'Anna', 'anna.lehtonen@otava.fi', '+358 50 62172')
  ];

  constructor() {}

  ngOnInit() {
  }

}
