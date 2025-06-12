import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService, UserRole } from './auth.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const allowedRoles = route.data['roles'] as UserRole[] | undefined;
    const user = this.auth.getCurrentUser();
    if (!user) {
      return this.router.createUrlTree(['/login']);
    }
    if (!allowedRoles || allowedRoles.includes(user.role)) {
      return true;
    }
    return this.router.createUrlTree(['/403']);
  }
}
