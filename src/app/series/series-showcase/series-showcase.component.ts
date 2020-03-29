import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "series-showcase",
  templateUrl: "./series-showcase.component.html",
  styleUrls: ["./series-showcase.component.scss"]
})
export class SeriesShowcaseComponent implements OnInit {
  @Input() public showcaseTitle: string;
  @Input() public series: any[];

  constructor() {}

  ngOnInit(): void {}
}
