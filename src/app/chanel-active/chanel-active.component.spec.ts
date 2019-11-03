import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelActiveComponent } from './chanel-active.component';

describe('ChanelActiveComponent', () => {
  let component: ChanelActiveComponent;
  let fixture: ComponentFixture<ChanelActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
