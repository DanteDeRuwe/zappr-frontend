import { Component, OnInit } from "@angular/core";
import { UsersdataService } from "../users/usersdata.service";
import { Observable } from "rxjs";
import { User } from "../users/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private _dataService: UsersdataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this._dataService.me$();
  }

  get authenticated(): boolean {
    return this._dataService.authenticated;
  }

  logout() {
    this._dataService.logout();
    this._router.navigate([""]);
  }
}
