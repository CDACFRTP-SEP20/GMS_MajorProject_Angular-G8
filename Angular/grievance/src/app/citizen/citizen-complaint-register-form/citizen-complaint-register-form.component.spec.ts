import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenComplaintRegisterFormComponent } from './citizen-complaint-register-form.component';

describe('CitizenComplaintRegisterFormComponent', () => {
  let component: CitizenComplaintRegisterFormComponent;
  let fixture: ComponentFixture<CitizenComplaintRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenComplaintRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenComplaintRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
