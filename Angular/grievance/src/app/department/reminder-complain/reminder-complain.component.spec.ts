import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderComplainComponent } from './reminder-complain.component';

describe('ReminderComplainComponent', () => {
  let component: ReminderComplainComponent;
  let fixture: ComponentFixture<ReminderComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
