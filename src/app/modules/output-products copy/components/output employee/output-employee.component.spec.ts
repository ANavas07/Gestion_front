import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEmployeeComponent } from './output-employee.component';

describe('OutputComponent', () => {
  let component: OutputEmployeeComponent;
  let fixture: ComponentFixture<OutputEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputEmployeeComponent]
    });
    fixture = TestBed.createComponent(OutputEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
