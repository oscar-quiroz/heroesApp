import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements   CanLoad, CanActivate {

  constructor( private authService: AuthService,
    private router:Router){}
 
 
   canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.authService.verificarAutenticacion()
      .pipe(
        tap( autenticado => {
          if(!autenticado){
            this.router.navigate(['./auth'])
          }
        })
      );
      
      
   }
 

   // cargar un modulo
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.authService.verificarAutenticacion()
      .pipe(
        tap( autenticado => {
          if(!autenticado){
            this.router.navigate(['./auth'])
          }
        })
      );
  
  }
}
