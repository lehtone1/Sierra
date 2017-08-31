import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunaReservationComponent } from './sauna-reservation.component';

describe('SaunaReservationComponent', () => {
  let component: SaunaReservationComponent;
  let fixture: ComponentFixture<SaunaReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaunaReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaunaReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
