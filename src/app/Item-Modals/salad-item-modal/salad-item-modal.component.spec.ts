import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladItemModalComponent } from './salad-item-modal.component';

describe('SaladItemModalComponent', () => {
  let component: SaladItemModalComponent;
  let fixture: ComponentFixture<SaladItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaladItemModalComponent]
    });
    fixture = TestBed.createComponent(SaladItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
