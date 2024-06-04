import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersEmployeeComponent } from './suppliers-employee.component';

describe('SuppliersComponent', () => {
  let component: SuppliersEmployeeComponent;
  let fixture: ComponentFixture<SuppliersEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersEmployeeComponent]
    });
    fixture = TestBed.createComponent(SuppliersEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
