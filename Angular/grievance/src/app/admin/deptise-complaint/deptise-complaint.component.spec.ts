import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptiseComplaintComponent } from './deptise-complaint.component';

describe('DeptiseComplaintComponent', () => {
  let component: DeptiseComplaintComponent;
  let fixture: ComponentFixture<DeptiseComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptiseComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptiseComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
