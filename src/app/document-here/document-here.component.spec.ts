import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentHereComponent } from './document-here.component';

describe('DocumentHereComponent', () => {
  let component: DocumentHereComponent;
  let fixture: ComponentFixture<DocumentHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
