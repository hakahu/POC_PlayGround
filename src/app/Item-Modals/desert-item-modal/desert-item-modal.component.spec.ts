import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertItemModalComponent } from './desert-item-modal.component';

describe('DesertItemModalComponent', () => {
  let component: DesertItemModalComponent;
  let fixture: ComponentFixture<DesertItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesertItemModalComponent]
    });
    fixture = TestBed.createComponent(DesertItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
