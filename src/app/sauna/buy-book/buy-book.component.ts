import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {

  name = '';
  apartment = '';

  constructor() { }

  ngOnInit() {
  }

  updateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  updateApartment(event: Event) {
    this.apartment = (<HTMLInputElement>event.target).value;
  }

  public buyBookMail() {
    const link = 'mailto:eero.lehtonen@aalto.fi'
            + '?subject=' + encodeURI('Sierra kirjan osto')
            // tslint:disable-next-line:max-line-length
            + '&body=' + encodeURI(`Hei, \n\n haluaisin ostaa yhden Sierra kirjan \n\n Tiedot: \n\n Nimi: ${this.name} \n Asunto: ${this.apartment} \n\n Kiitos!`)
    ;

    window.location.href = link;
}

}
