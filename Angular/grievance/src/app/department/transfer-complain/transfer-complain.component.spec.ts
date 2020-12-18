import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferComplainComponent } from './transfer-complain.component';

describe('TransferComplainComponent', () => {
  let component: TransferComplainComponent;
  let fixture: ComponentFixture<TransferComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
