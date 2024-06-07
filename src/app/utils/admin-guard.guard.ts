import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const token = localStorage.getItem('token') || '';

  // Decodificar el token para obtener la información del usuario
  let decodedToken: any;
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    router.navigate(['/login']);
    return false;
  }

  // Verificar si el rol es 'Admin'
  if (decodedToken.role !== 'Admin') {
    router.navigate(['/panel-employee']);
    toastr.error('No tiene permisos para acceder a esta página.');
    return false;
  }

  return true;
};
