import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaunaScheduleComponent } from './sauna-schedule.component';

describe('SaunaScheduleComponent', () => {
  let component: SaunaScheduleComponent;
  let fixture: ComponentFixture<SaunaScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaunaScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaunaScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
