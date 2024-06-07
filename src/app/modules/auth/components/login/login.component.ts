import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { UserLoginFields } from 'src/app/interfaces/user.interfaces';
import { jwtDecode } from 'jwt-decode';
import { LogginAttemptService } from 'src/app/services/loggin-attempt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading:boolean=false;

  //inject toastr -> interactive succes or error messages
  // _userService: consume the service
  constructor(private toastr: ToastrService, private _userService: UserService,
              private router:Router, private _errorService: ErrorService, private _loginAttemptService:LogginAttemptService){}

  get userNameEmpty(){
    return this.formLogIn.get('userName') as FormControl;
  }

  get passwordEmpty(){
    return this.formLogIn.get('passwordUser') as FormControl;
  }


  formLogIn= new FormGroup({
    'userName': new FormControl('', Validators.required),
    'passwordUser': new FormControl('', Validators.required),
  })

  login(){

    if(!this._loginAttemptService.canAttemptLogin()){
      const lockoutExpiration= this._loginAttemptService.getLockoutExpiration();
      const remainingTime=lockoutExpiration ? Math.ceil((lockoutExpiration - Date.now())/1000): 0;
      const lockoutDate= lockoutExpiration ? new Date(lockoutExpiration).toLocaleString(): '';
      this.toastr.error(`Número máximo de intentos alcanzado. Por favor, inténtelo nuevamente en ${remainingTime} segundos (${lockoutDate}).`);
      this.loading=false;
      this.formLogIn.reset();
      return;
    }

    const user:UserLoginFields ={
      userName: this.formLogIn.get('userName')?.value || '',
      passwordUser: this.formLogIn.get('passwordUser')?.value || '',
    }

    this.loading=true;
    //every time a method returns an observable, i need to suscribe to it
    try {
      this._userService.login(user).subscribe({
        next: (token) => {
          const userData=this.decodeToken(token);
          this._loginAttemptService.resetAttempts();
          if (userData.role === 'Admin') {
            localStorage.setItem('token', token);
            this.router.navigate(['/panel']);
          }else{
            localStorage.setItem('token', token);
            this.router.navigate(['/panel-employee']);
          }
        },
        error: (e: HttpErrorResponse) => {
          this._loginAttemptService.incrementAttempts(); // Incrementa los intentos en caso de error
          const remainingAttempts = this._loginAttemptService.getRemainingAttempts();
          this._errorService.msgError(e);
          this.toastr.error(`Inicio de sesión fallido. Te quedan ${remainingAttempts} intentos.`);
          this.loading = false;
          this.formLogIn.reset();
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
    
    

  }

  decodeToken(token:string):any{
    try{
      return jwtDecode(token);
    }catch(Error){
      return null
    }
  }

  
}
