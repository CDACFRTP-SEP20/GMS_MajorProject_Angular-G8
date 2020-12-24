import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenChangePasswordComponent } from './citizen-change-password.component';

describe('CitizenChangePasswordComponent', () => {
  let component: CitizenChangePasswordComponent;
  let fixture: ComponentFixture<CitizenChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
