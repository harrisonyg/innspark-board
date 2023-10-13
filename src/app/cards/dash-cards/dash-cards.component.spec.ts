import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCardsComponent } from './dash-cards.component';

describe('DashCardsComponent', () => {
  let component: DashCardsComponent;
  let fixture: ComponentFixture<DashCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashCardsComponent]
    });
    fixture = TestBed.createComponent(DashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
