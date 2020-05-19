import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/users/user.model";
import { UsersdataService } from "src/app/users/usersdata.service";

import { Series } from "../series.model";
import { map } from "rxjs/operators";

@Component({
  selector: "series-actions",
  templateUrl: "./series-actions.component.html",
  styleUrls: ["./series-actions.component.scss"],
})
export class SeriesActionsComponent implements OnInit {
  @Input() series: Series;

  USER_ID: number = 1; //todo, user is hardcoded
  user$: Observable<User>;
  seriesIsOnWL$: Observable<Boolean>;
  seriesIsFav$: Observable<boolean>;

  constructor(private _dataService: UsersdataService) {}

  ngOnInit() {
    this.user$ = this._dataService.get$(this.USER_ID);
    this.seriesIsOnWL$ = this.user$.pipe(
      map((u) => !u.watchListedSeries.every((s) => s.id != this.series.id))
    );
    this.seriesIsFav$ = this.user$.pipe(
      map((u) => !u.favoriteSeries.every((s) => s.id != this.series.id))
    );
  }

  addSeriesToWatchList() {
    this._dataService
      .addSeriesToWatchList(this.series.id, this.USER_ID)
      .subscribe(); //subscribe or the mutation wont go through
  }

  addSeriesToFavorites() {
    this._dataService
      .addSeriesToFavorites(this.series.id, this.USER_ID)
      .subscribe(); //subscribe or the mutation wont go through
  }
}
