import { Contact } from './contact.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [
  new Contact('Talonmies', 'Pekka Salmi', '0400 460 718', '-'),
  new Contact('Isännöitsijä', 'Tom Amlin', '09 632 019', 'tom@amlin.fi'),
  new Contact('Hallituksen puheenjohtaja', 'Heikki Lehtonen', '050 1311', 'heikki@lehtonen.fi'),
  new Contact('Hallituksen Varapuheenjohtaja', 'Erkki Yrjölä',  '0500 814 811', 'e.yrjola@finneire.fi'),
  new Contact('Hallituksen jäsen', 'Sari Perttunen', '040 488 9444', 'sari.perttunen@reima.com'),
  new Contact('Hallituksen jäsen', 'Martin Relander', '040 523 4896', 'martin.relander@gmail.com'),
  new Contact('Hallituksen jäsen', 'Hannu Väänänen', '050 332 3652', 'hannu.vaananen@fi.abb.com'),
  new Contact('Hallituksen Varajäsen', 'Esa Salonen', '0400 503 385', 'esa.salonen@dlapiper.com'),
  new Contact('Hallituksen Varajäsen', 'Timo Suominen', '040 522 7176', 'suominen.timoj@gmail.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
