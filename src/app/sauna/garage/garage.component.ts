import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  name= '';
  apartment= '';

  constructor() { }

  ngOnInit() {
  }

  updateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  updateApartment(event: Event) {
    this.apartment = (<HTMLInputElement>event.target).value;
  }

  public garageMail() {
    const link = 'mailto:tom@amlin.fi'
            + '?subject=' + encodeURI('Sierra, autotallipaikan jonotuslista')
            // tslint:disable-next-line:max-line-length
            + '&body=' + encodeURI(`Hei, \n\n lisäätkö minut autotallipaikan jonotuslistalle. \n\n Tiedot: \n\n Nimi: ${this.name} \n Asunto: ${this.apartment} \n\n Kiitos!`)
    ;

    window.location.href = link;
  }

}
