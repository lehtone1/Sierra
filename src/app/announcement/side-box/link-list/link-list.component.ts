import { Link } from './link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [
    new Link('Yhtiöjärjestys 2006', 'www.finnair.fi'),
    new Link('Yleinen turvallisuusohje', 'www.facebook.com'),
    new Link('5-vuotis suunnitelma', 'www.facebook.com'),
    new Link('Kunnossapitoilmoitus', 'www.facebook.com'),
    new Link('Remontti-ilmoitus', 'www.facebook.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
