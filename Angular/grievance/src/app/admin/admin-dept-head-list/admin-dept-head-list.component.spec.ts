import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeptHeadListComponent } from './admin-dept-head-list.component';

describe('AdminDeptHeadListComponent', () => {
  let component: AdminDeptHeadListComponent;
  let fixture: ComponentFixture<AdminDeptHeadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeptHeadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeptHeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
