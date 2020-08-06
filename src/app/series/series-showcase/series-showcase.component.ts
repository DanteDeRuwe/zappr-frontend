import { Component, Input } from "@angular/core";

import { Series } from "../series.model";

@Component({
  selector: "series-showcase",
  templateUrl: "./series-showcase.component.html",
  styleUrls: ["./series-showcase.component.scss"],
})
export class SeriesShowcaseComponent {
  @Input() showcaseTitle: string;
  @Input() series: Series[];
  @Input() full: boolean;

  ngAfterViewChecked() {
    //Prevent scrollbar although it's turned off
    let scrolls = document.querySelectorAll(".drag-scroll-content");
    if (scrolls)
      Array.from(scrolls).forEach(
        (x) => ((x as HTMLElement).style.overflow = "hidden hidden")
      );
  }
}
