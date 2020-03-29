import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";

import { SeriesdataService } from "../seriesdata.service";

@Component({
  selector: "discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"]
})
export class DiscoverComponent implements OnInit {
  public today$: Observable<any>;
  public thisweek$: Observable<any>;

  constructor(private _seriesdataService: SeriesdataService) {}

  ngOnInit() {
    this.today$ = this._seriesdataService.today$("BE");
    this.thisweek$ = this._seriesdataService.schedule$("BE", 1, 7);
  }
}
