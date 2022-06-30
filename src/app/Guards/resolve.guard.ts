import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../shared/service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

constructor(private serv:ServiceService){

}


    userObj={
      userId:10,
      userName:"gana"
    }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {



  // return  this.serv.getUsers();
 

  return this.userObj;
  }

  
}
