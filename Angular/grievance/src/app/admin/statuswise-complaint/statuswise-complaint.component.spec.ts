import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuswiseComplaintComponent } from './statuswise-complaint.component';

describe('StatuswiseComplaintComponent', () => {
  let component: StatuswiseComplaintComponent;
  let fixture: ComponentFixture<StatuswiseComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuswiseComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuswiseComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
