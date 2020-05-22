import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { Series } from "../series.model";
import { SeriesdataService } from "../seriesdata.service";
import { UsersdataService } from "src/app/users/usersdata.service";

@Component({
  selector: "series-detail",
  templateUrl: "./series-detail.component.html",
  styleUrls: ["./series-detail.component.scss"],
})
export class SeriesDetailComponent implements OnInit {
  public series: Series;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _seriesdataService: SeriesdataService,
    private _usersdataService: UsersdataService
  ) {}

  ngOnInit(): void {
    const id: number = +this._route.snapshot.paramMap.get("id");

    // We subscribe here instead of async piping in the component, to just deal with the errors
    this._seriesdataService.get$(id).subscribe(
      (val) => {
        if (val) this.series = val;
        else this._router.navigate(["404"]);
      },
      (err) => this._router.navigate(["404"])
    );
  }

  get authenticated(): boolean {
    return this._usersdataService.authenticated;
  }

  redirectToLogin() {
    this._usersdataService.redirectToLogin(this._router.url);
  }
}
