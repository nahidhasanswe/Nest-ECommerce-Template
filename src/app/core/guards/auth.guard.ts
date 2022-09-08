import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isAuthenticate) {
        return true;
    }

    // Store redirect Url into storage
    this.auth.setRedirectUrl(state.url);
  
    // Login
    // this.router.navigate(['/auth/login']);
    return false;
  }
}