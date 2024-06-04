import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrationEmployeeComponent } from './modal-registration-employee.component';

describe('ModalRegistrationComponent', () => {
  let component: ModalRegistrationEmployeeComponent;
  let fixture: ComponentFixture<ModalRegistrationEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegistrationEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModalRegistrationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
