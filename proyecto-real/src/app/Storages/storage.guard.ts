import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ListService } from '../components/list.service';

@Injectable({
  providedIn: 'root'
})

export class StorageGuard implements CanActivate {

  constructor(private router:Router,
    private listService:ListService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAllowed = JSON.parse(sessionStorage.getItem("isAllowed")?? "false")
      console.log({isAllowed});
    return isAllowed;
    
   
}
}