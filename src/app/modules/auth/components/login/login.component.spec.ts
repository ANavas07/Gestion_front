import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {UserService} from '../../../../services/user.service'
//Importaciones para pruebas
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  let component: LoginComponent;
  let service: UserService;
/* eslint-enable @typescript-eslint/no-unused-vars */

  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers:[UserService],
      imports: [ToastrModule.forRoot(), HttpClientModule,
                ReactiveFormsModule ] 
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(UserService);
    fixture.detectChanges();
  });


});
