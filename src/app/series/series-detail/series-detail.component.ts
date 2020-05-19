import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { Series } from "../series.model";
import { SeriesdataService } from "../seriesdata.service";

@Component({
  selector: "series-detail",
  templateUrl: "./series-detail.component.html",
  styleUrls: ["./series-detail.component.scss"],
})
export class SeriesDetailComponent implements OnInit {
  public series$: Observable<Series>;

  constructor(
    private _route: ActivatedRoute,
    private _seriesdataService: SeriesdataService
  ) {}

  ngOnInit(): void {
    const id: number = +this._route.snapshot.paramMap.get("id");
    this.series$ = this._seriesdataService.get$(id);
  }
}
