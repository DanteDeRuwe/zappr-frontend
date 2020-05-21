import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { UsersdataService } from "./usersdata.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private _dataService: UsersdataService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._dataService.authenticated$.getValue()) {
      return true;
    }
    this._dataService.redirectUrl = state.url;
    this._router.navigate(["/login"]);
    return false;
  }
}
