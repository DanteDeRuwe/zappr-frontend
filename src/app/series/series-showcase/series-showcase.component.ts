import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Series } from "../series.model";
import { DragScrollComponent } from "ngx-drag-scroll";

@Component({
  selector: "series-showcase",
  templateUrl: "./series-showcase.component.html",
  styleUrls: ["./series-showcase.component.scss"],
})
export class SeriesShowcaseComponent {
  @Input() showcaseTitle: string;
  @Input() series: Series[];
  @Input() full: boolean;
}
