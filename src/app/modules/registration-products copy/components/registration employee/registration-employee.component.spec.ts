import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEmployeeComponent } from './registration-employee.component';

describe('RegistrationComponent', () => {
  let component: RegistrationEmployeeComponent;
  let fixture: ComponentFixture<RegistrationEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationEmployeeComponent]
    });
    fixture = TestBed.createComponent(RegistrationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
