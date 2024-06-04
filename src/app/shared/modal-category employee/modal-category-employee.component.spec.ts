import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoryEmployeeComponent } from './modal-category-employee.component';

describe('ModalCategoryComponent', () => {
  let component: ModalCategoryEmployeeComponent ;
  let fixture: ComponentFixture<ModalCategoryEmployeeComponent >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCategoryEmployeeComponent ]
    });
    fixture = TestBed.createComponent(ModalCategoryEmployeeComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
