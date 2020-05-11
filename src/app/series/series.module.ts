import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiscoverComponent } from "./discover/discover.component";
import { SeriesDetailComponent } from "./series-detail/series-detail.component";
import { SeriesShowcaseComponent } from "./series-showcase/series-showcase.component";
import { RouterModule } from "@angular/router";
import { SeriesSearchComponent } from "./series-search/series-search.component";

@NgModule({
  declarations: [
    SeriesShowcaseComponent,
    DiscoverComponent,
    SeriesDetailComponent,
    SeriesSearchComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [DiscoverComponent],
})
export class SeriesModule {}
