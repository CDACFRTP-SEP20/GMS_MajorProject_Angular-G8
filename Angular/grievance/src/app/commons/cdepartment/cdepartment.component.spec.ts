import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdepartmentComponent } from './cdepartment.component';

describe('CdepartmentComponent', () => {
  let component: CdepartmentComponent;
  let fixture: ComponentFixture<CdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
