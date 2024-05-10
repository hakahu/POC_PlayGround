import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerItemModalComponent } from './burger-item-modal.component';

describe('BurgerItemModalComponent', () => {
  let component: BurgerItemModalComponent;
  let fixture: ComponentFixture<BurgerItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerItemModalComponent]
    });
    fixture = TestBed.createComponent(BurgerItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
