import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';

@Injectable({providedIn: 'root'})
export class AuthenticationGuard implements CanActivate {

  constructor(private  authenticationService: AuthenticationService, private router: Router,
    private notificationService: NotificationService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isUserLoggedIn();
    }

    private isUserLoggedIn() : boolean {
      if (this.authenticationService.isLoggedIn()) {
        return true;
      }

    this.router.navigate(['/login']); 
    this.notificationService.notify(NotificationType.ERROR, 'you need to log in to access this page'.toUpperCase());
=======
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService  } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): boolean { 
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    this.notificationService.notify(
      NotificationType.ERROR,
      'YOU NEED TO LOG IN TO ACCESS THIS PAGE'
    );
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
    return false;
  }
}
