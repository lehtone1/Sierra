import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsAndOrdersComponent } from './reservations-and-orders.component';

describe('ReservationsAndOrdersComponent', () => {
  let component: ReservationsAndOrdersComponent;
  let fixture: ComponentFixture<ReservationsAndOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsAndOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsAndOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
