import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-employee',
  templateUrl: './navbar-employee.component.html',
  styleUrls: ['./navbar-employee.component.css']
})
export class NavbarEmployeeComponent {

  constructor(private router:Router){}

  logout(){
    const result= confirm("¿Estas seguro de salir de la aplicación?");
    if(result){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
