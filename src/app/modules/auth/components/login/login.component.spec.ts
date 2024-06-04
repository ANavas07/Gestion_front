import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {UserService} from '../../../../services/user.service'
import { UserLoginFields } from 'src/app/interfaces/user.interfaces';
//Importaciones para pruebas
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:UserService;

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
