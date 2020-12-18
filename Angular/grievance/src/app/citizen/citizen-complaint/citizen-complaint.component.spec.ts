import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenComplaintComponent } from './citizen-complaint.component';

describe('CitizenComplaintComponent', () => {
  let component: CitizenComplaintComponent;
  let fixture: ComponentFixture<CitizenComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
