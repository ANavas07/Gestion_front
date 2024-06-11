import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';

export const authGuard: CanActivateFn = () => {

  // const router = new Router;
  const router = inject(Router)
  
  const token = localStorage.getItem('token');
  if (token === undefined || token == "") {
    router.navigate(['/login']);
    return false;
  }


  return true;
};
