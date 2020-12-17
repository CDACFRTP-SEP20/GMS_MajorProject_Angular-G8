import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenComplaintRegisterComponent } from './citizen-complaint-register.component';

describe('CitizenComplaintRegisterComponent', () => {
  let component: CitizenComplaintRegisterComponent;
  let fixture: ComponentFixture<CitizenComplaintRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenComplaintRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenComplaintRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
