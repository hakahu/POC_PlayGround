import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaItemModalComponent } from './pasta-item-modal.component';

describe('PastaItemModalComponent', () => {
  let component: PastaItemModalComponent;
  let fixture: ComponentFixture<PastaItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastaItemModalComponent]
    });
    fixture = TestBed.createComponent(PastaItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
