import { Component, OnInit, Input } from "@angular/core";
import { Series } from "../series.model";
import { SeriesdataService } from "../seriesdata.service";

@Component({
  selector: "series-actions",
  templateUrl: "./series-actions.component.html",
  styleUrls: ["./series-actions.component.scss"],
})
export class SeriesActionsComponent implements OnInit {
  @Input() series: Series;

  constructor(private _dataService: SeriesdataService) {}

  ngOnInit() {}

  addSeriesToWatchList() {
    this._dataService.addSeriesToWatchList(this.series);
  }

  addSeriesToFavorites() {
    this._dataService.addSeriesToFavorites(this.series);
  }
}
