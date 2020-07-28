import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
  constructor(private userService : UserService , private router: Router){

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('inside can-activate checking...')
  if(!this.userService.isLogedIn()){
    console.log('inside can-activate')
      this.router.navigateByUrl('/login');
      this.userService.deleteToken();
      return false;
    }
  return true;
  } 
}
