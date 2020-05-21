import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UsersdataService } from "src/app/users/usersdata.service";

import { Series } from "../series.model";

@Component({
  selector: "favorite-series",
  templateUrl: "./favorite-series.component.html",
  styleUrls: ["./favorite-series.component.scss"],
})
export class FavoriteSeriesComponent implements OnInit {
  series$: Observable<Series[]>;
  constructor(private _dataService: UsersdataService) {}

  ngOnInit(): void {
    this.series$ = this._dataService.getFavorites$();
  }
}
