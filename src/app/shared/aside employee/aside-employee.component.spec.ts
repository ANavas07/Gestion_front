import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideEmployeeComponent } from './aside-employee.component';

describe('AsideComponent', () => {
  let component: AsideEmployeeComponent;
  let fixture: ComponentFixture<AsideEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideEmployeeComponent]
    });
    fixture = TestBed.createComponent(AsideEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
