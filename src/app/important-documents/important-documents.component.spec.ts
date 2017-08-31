import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantDocumentsComponent } from './important-documents.component';

describe('ImportantDocumentsComponent', () => {
  let component: ImportantDocumentsComponent;
  let fixture: ComponentFixture<ImportantDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
