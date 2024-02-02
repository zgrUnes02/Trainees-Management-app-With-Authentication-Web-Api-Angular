import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router) ;
  const toastr = inject(ToastrService) ;

  const token = localStorage.getItem('token') ;

  if ( token ) {
    return true ;
  }
  else {
    toastr.error("You have to login !") ;
    router.navigate(['login']) ;
    return false ;
  }

};
