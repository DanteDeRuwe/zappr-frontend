import { Component, OnInit } from "@angular/core";
import { UsersdataService } from "src/app/users/usersdata.service";
import { Observable } from "rxjs";
import { Series } from "../series.model";

@Component({
  selector: "watchlist",
  templateUrl: "./watchlist.component.html",
  styleUrls: ["./watchlist.component.scss"],
})
export class WatchlistComponent implements OnInit {
  series$: Observable<Series[]>;
  constructor(private _dataService: UsersdataService) {}

  ngOnInit(): void {
    this.series$ = this._dataService.getWatchlist$();
  }
}
