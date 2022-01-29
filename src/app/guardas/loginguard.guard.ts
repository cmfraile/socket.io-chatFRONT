import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  
  constructor(private _r:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      /*return new Promise( (rs,rj) => {
        const tokenobj = {token:localStorage['token'],expiracion:parseInt(localStorage['expiracion'])};
        const movida:any = {
          presente:new Date(),
          futuro:new Date(tokenobj.expiracion)
        };
        if(Date.now() > movida.futuro){console.log(true)}else{console.log(false)};
        if(!!localStorage['cipote']){return rj()};
        
        /*if(Date.now() > new Date(tokenobj.expiracion).getMilliseconds() ){
          localStorage.clear() ; this._r.navigate(['']); rj(false);
        }* /

        rs(true);
      });*/

      return new Promise( (rs,rj) => {
        const fallo = () => { localStorage.clear() ; this._r.navigate(['']) ; rs(false) }
        const expiracion = parseInt(localStorage['expiracion']);
        if(!expiracion){fallo()};
        if(Date.now() > expiracion){fallo()};
        rs(true);
      });
  }
  
}
