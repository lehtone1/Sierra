import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-email',
  templateUrl: './announcement-email.component.html',
  styleUrls: ['./announcement-email.component.css']
})
export class AnnouncementEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addNotificationMail() {
    const link = 'mailto:info@sierra.fi'
            + '?subject=' + encodeURI('Sierra sähköpostilistalle lisäys')
            // tslint:disable-next-line:max-line-length
            + '&body=' + encodeURI(`Hei, \n\n lisäätkö minut Sierran sähköpostilistalle. \n\n Kiitos!`)
    ;

    window.location.href = link;
}

}
