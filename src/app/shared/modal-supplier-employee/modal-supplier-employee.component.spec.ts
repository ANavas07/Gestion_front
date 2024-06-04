import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupplierEmployeeComponent } from './modal-supplier-employee.component';

describe('ModalSupplierComponent', () => {
  let component: ModalSupplierEmployeeComponent;
  let fixture: ComponentFixture<ModalSupplierEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSupplierEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModalSupplierEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
