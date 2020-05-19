import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiscoverComponent } from "./discover/discover.component";
import { SeriesDetailComponent } from "./series-detail/series-detail.component";
import { SeriesShowcaseComponent } from "./series-showcase/series-showcase.component";
import { RouterModule } from "@angular/router";
import { SeriesSearchComponent } from "./series-search/series-search.component";
import { SeriesActionsComponent } from "./series-actions/series-actions.component";
import { SeriesActionComponent } from "./series-action/series-action.component";
import { FavoriteSeriesComponent } from "./favorite-series/favorite-series.component";
import { DragScrollModule } from "ngx-drag-scroll";

@NgModule({
  declarations: [
    SeriesShowcaseComponent,
    DiscoverComponent,
    SeriesDetailComponent,
    SeriesSearchComponent,
    SeriesActionsComponent,
    SeriesActionComponent,
    FavoriteSeriesComponent,
  ],
  imports: [CommonModule, RouterModule, DragScrollModule],
  exports: [],
})
export class SeriesModule {}
