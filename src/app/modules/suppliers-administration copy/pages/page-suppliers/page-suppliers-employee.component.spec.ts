import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuppliersEmployeeComponent } from './page-suppliers-employee.component';

describe('PageSuppliersEmployeeComponent', () => {
  let component: PageSuppliersEmployeeComponent;
  let fixture: ComponentFixture<PageSuppliersEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSuppliersEmployeeComponent]
    });
    fixture = TestBed.createComponent(PageSuppliersEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
