import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDeptHeadComponent } from './admin-add-dept-head.component';

describe('AdminAddDeptHeadComponent', () => {
  let component: AdminAddDeptHeadComponent;
  let fixture: ComponentFixture<AdminAddDeptHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDeptHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDeptHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
