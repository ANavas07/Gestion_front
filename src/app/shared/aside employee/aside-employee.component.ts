import { AsideEmployeeMenuService } from './../../core/services/aside-employee-menu.service';
import { Component, OnInit } from '@angular/core';
import { IAsideMenuEmployee } from './../../core/services/aside-employee-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-employee',
  templateUrl: './aside-employee.component.html',
  styleUrls: ['./aside-employee.component.css']
})
export class AsideEmployeeComponent implements OnInit {

  asideEmployeeMenuList:IAsideMenuEmployee[];

  constructor(private _asideEmployeeMenuService: AsideEmployeeMenuService, private router:Router){
    this.asideEmployeeMenuList=_asideEmployeeMenuService.getAsideMenuEmployee();
  }

  logout(){
    const result= confirm("¿Estas seguro de salir de la aplicación?");
    if(result){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {

  }

}
