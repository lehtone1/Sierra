import { Link } from './link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [
    new Link('finnair', 'www.finnair.fi'),
    new Link('facebook', 'www.facebook.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
