import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDeptHeadComponent } from './admin-update-dept-head.component';

describe('AdminUpdateDeptHeadComponent', () => {
  let component: AdminUpdateDeptHeadComponent;
  let fixture: ComponentFixture<AdminUpdateDeptHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateDeptHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateDeptHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
