import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaItemModalComponent } from './pizza-item-modal.component';

describe('PizzaItemModalComponent', () => {
  let component: PizzaItemModalComponent;
  let fixture: ComponentFixture<PizzaItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaItemModalComponent]
    });
    fixture = TestBed.createComponent(PizzaItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
