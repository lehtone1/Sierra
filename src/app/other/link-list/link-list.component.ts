import { Link } from './link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [
    new Link('Yhtiöjärjestys 2006', '../../../assets/pdf/Yhtiojarjestys-2006.pdf'),
    new Link('Yleinen turvallisuusohje', '../../../assets/pdf/Yleinen-turvallisuusohje.PDF'),
    new Link('5-vuotis suunnitelma', '../../../assets/pdf/Korjaukset-5-vuotis-suunnitelma.pdf'),
    new Link('Kunnossapitoilmoitus', '../../../assets/pdf/Kunnossapitoilmoitus.pdf'),
    new Link('Remonttiohjeet', '../../../assets/pdf/Remonttiohjeet.pdf')
  ];

  constructor() { }

  ngOnInit() {
  }

}
