import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReopenComplainListComponent } from './reopen-complain-list.component';

describe('ReopenComplainListComponent', () => {
  let component: ReopenComplainListComponent;
  let fixture: ComponentFixture<ReopenComplainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReopenComplainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReopenComplainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
