import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeriesShowcaseComponent } from "./series-showcase/series-showcase.component";
import { DiscoverComponent } from "./discover/discover.component";

@NgModule({
  declarations: [SeriesShowcaseComponent, DiscoverComponent],
  imports: [CommonModule],
  exports: [DiscoverComponent]
})
export class SeriesModule {}
