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
    const link = 'mailto:eero.lehtonen@aalto.fi'
            + '?subject=' + encodeURI('Sierra kirjan osto')
            + '&body=' + encodeURI(`Nimi: ${this.name} \n Asunto: ${this.apartment} \n Päivä: ${this.day}`)
    ;

    window.location.href = link;
  }

}
