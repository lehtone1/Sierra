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
    const link = 'mailto:eero.lehtonen@aalto.fi'
            + '?subject=' + encodeURI('Sierra kirjan osto')
            + '&body=' + encodeURI(`Nimi: ${this.name} \n Asunto: ${this.apartment}`)
    ;

    window.location.href = link;
  }

}
