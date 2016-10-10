import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  canActivate() {
    const token = window.sessionStorage.getItem('id_token');

    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
