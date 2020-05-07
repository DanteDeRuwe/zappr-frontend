import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiscoverComponent } from "./discover/discover.component";
import { SeriesDetailComponent } from "./series-detail/series-detail.component";
import { SeriesShowcaseComponent } from "./series-showcase/series-showcase.component";

@NgModule({
  declarations: [
    SeriesShowcaseComponent,
    DiscoverComponent,
    SeriesDetailComponent,
  ],
  imports: [CommonModule],
  exports: [DiscoverComponent],
})
export class SeriesModule {}
