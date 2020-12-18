import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenComplaintStatusComponent } from './citizen-complaint-status.component';

describe('CitizenComplaintStatusComponent', () => {
  let component: CitizenComplaintStatusComponent;
  let fixture: ComponentFixture<CitizenComplaintStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenComplaintStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenComplaintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
