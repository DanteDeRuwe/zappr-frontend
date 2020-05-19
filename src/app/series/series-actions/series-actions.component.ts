import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "src/app/users/user.model";
import { UsersdataService } from "src/app/users/usersdata.service";

import { Series } from "../series.model";

@Component({
  selector: "series-actions",
  templateUrl: "./series-actions.component.html",
  styleUrls: ["./series-actions.component.scss"],
})
export class SeriesActionsComponent implements OnInit {
  @Input() series: Series;

  USER_ID: number = 1; //todo, user is hardcoded
  user$: Observable<User>;
  seriesIsFav$: Observable<boolean>;
  seriesIsOnWL$: Observable<boolean>;

  constructor(private _dataService: UsersdataService) {}

  ngOnInit() {
    this.user$ = this._dataService.get$(this.USER_ID);
    this.seriesIsFav$ = this.seriesIsOnList$("favoriteSeries");
    this.seriesIsOnWL$ = this.seriesIsOnList$("watchListedSeries");
  }

  addSeriesToWatchList() {
    this._dataService
      .addSeriesToWatchList(this.series.id, this.USER_ID)
      .subscribe();
  }

  addSeriesToFavorites() {
    this._dataService
      .addFavoriteSeries(this.series.id, this.USER_ID)
      .subscribe();
  }

  removeSeriesFromWatchList() {
    this._dataService
      .removeSeriesFromWatchList(this.series.id, this.USER_ID)
      .subscribe();
  }

  removeSeriesFromFavorites() {
    this._dataService
      .removeFavoriteSeries(this.series.id, this.USER_ID)
      .subscribe();
  }

  private seriesIsOnList$(userlistKey: string): Observable<boolean> {
    return this.user$.pipe(
      map((u) => !u[userlistKey].every((s: Series) => s.id != this.series.id))
    );
  }
}
