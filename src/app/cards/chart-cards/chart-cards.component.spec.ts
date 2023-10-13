import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCardsComponent } from './chart-cards.component';

describe('ChartCardsComponent', () => {
  let component: ChartCardsComponent;
  let fixture: ComponentFixture<ChartCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartCardsComponent]
    });
    fixture = TestBed.createComponent(ChartCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
