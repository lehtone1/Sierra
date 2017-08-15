import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sauna-reservation',
  templateUrl: './sauna-reservation.component.html',
  styleUrls: ['./sauna-reservation.component.css']
})
export class SaunaReservationComponent implements OnInit {

  name = '';
  apartment = '';
  day = '';

  constructor() { }

  ngOnInit() {
  }

  updateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  updateApartment(event: Event) {
    this.apartment = (<HTMLInputElement>event.target).value;
  }

  updateDay(event: Event) {
    this.day = (<HTMLInputElement>event.target).value;
  }

  public saunaMail() {
    const link = 'mailto:tom@amlin.fi'
            + '?subject=' + encodeURI('Sierra, sauna-ajan varaus')
            // tslint:disable-next-line:max-line-length
            + '&body=' + encodeURI(`Hei, \n\n haluaisin varata sauna-ajan. \n\n Nimi: ${this.name} \n Asunto: ${this.apartment} \n Päivä: ${this.day} \n\n Kiitos!`)
    ;

    window.location.href = link;
  }

}
