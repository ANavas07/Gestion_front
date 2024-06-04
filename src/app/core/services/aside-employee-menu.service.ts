import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//Interfaz donde defino los atributos del menu del aside
export interface IAsideMenuEmployee {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class AsideEmployeeMenuService {

  //Funcionamiento del menu 
  /*Primero, crea un servicio Angular. Este servicio usará Subject de RxJS
  para permitir la comunicación entre componentes:*/
  private _showMenu= new Subject<boolean>();
  showMenu= this._showMenu.asObservable();


  //lista de Menu con todo lo que se requiere
  private asideEmployeeMenuList: IAsideMenuEmployee[] = [
    { title: 'Panel', url: '/panel-employee', icon: 'grid_view' },
    { title: 'Agregar Proveedor', url: '/proveedores-employee', icon: 'apartment' },
    // { title: 'Gestion Categorias', url: '/categorias', icon: 'category' },
    { title: 'Ingreso De Productos', url: '/registro-employee', icon: 'inventory' },
    { title: 'Venta De Productos', url: '/salida-employee', icon: 'point_of_sale' },
  ];

  constructor() { }

  //@getAsideMenu(): me retorna una copiar de toda la lista
  getAsideMenuEmployee() {
    return [...this.asideEmployeeMenuList];
  }

  //@getMenuByUrl: busca el menu por la URL especificada
  getAsideMenuByUrl(url:string):IAsideMenuEmployee{
    return this.asideEmployeeMenuList.find(
      (menu)=>menu.url.toLowerCase() === url.toLowerCase()
    )as IAsideMenuEmployee
  }  

}
