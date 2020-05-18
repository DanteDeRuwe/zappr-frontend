import { Component, OnInit, Input } from "@angular/core";
import { Series } from "../series.model";
import { SeriesdataService } from "../seriesdata.service";
import { UsersdataService } from "src/app/users/usersdata.service";
import { Observable } from "rxjs";
import { User } from "src/app/users/user.model";

@Component({
  selector: "series-actions",
  templateUrl: "./series-actions.component.html",
  styleUrls: ["./series-actions.component.scss"],
})
export class SeriesActionsComponent implements OnInit {
  @Input() series: Series;
  public result: Observable<User>;
  private _user: User;

  constructor(private _dataService: UsersdataService) {}

  ngOnInit() {
    this._dataService
      .getBasicInfo$(1) //todo, user is hardcoded
      .subscribe((x) => (this._user = x));
  }

  addSeriesToWatchList() {
    this.result = this._dataService.addSeriesToWatchList(
      this.series,
      this._user
    );
    this.result.subscribe((x) => (this._user = x)); //subscribe or the mutation wont go through
  }

  addSeriesToFavorites() {
    this.result = this._dataService.addSeriesToFavorites(
      this.series,
      this._user
    );
    this.result.subscribe((x) => (this._user = x)); //subscribe or the mutation wont go through
  }
}
