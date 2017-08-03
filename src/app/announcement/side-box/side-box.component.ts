import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-box',
  templateUrl: './side-box.component.html',
  styleUrls: ['./side-box.component.css']
})
export class SideBoxComponent implements OnInit {

  components: string[] = ['<app-link-list></app-link-list>', '<app-buy-book></app-buy-book>', '<app-garage></app-garage>'];

  constructor() { }

  ngOnInit() {
  }

}
