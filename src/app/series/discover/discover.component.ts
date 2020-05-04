import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";

import { SeriesdataService } from "../seriesdata.service";
import { Series } from "../series.model";

@Component({
  selector: "discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"],
})
export class DiscoverComponent implements OnInit {
  public today$: Observable<Series[]>;
  public thisweek$: Observable<Series[]>;

  constructor(private _seriesdataService: SeriesdataService) {}

  ngOnInit() {
    this.today$ = this._seriesdataService.today$("BE");
    this.thisweek$ = this._seriesdataService.schedule$("BE", 1, 7);
  }
}
