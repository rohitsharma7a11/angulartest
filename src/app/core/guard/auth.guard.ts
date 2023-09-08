import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
Router
export const authGuard: CanActivateChildFn = (childRoute, state) => {
  let _router = inject(Router)
  let isLogedIn = localStorage.getItem('auth')?true:false
  if (!isLogedIn) {
    _router.navigate(['auth'])
    return false;
  }
  return true;
};
