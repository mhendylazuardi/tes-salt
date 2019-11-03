import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHereComponent } from './people-here.component';

describe('PeopleHereComponent', () => {
  let component: PeopleHereComponent;
  let fixture: ComponentFixture<PeopleHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
