import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DragScrollModule } from "ngx-drag-scroll";

import { DiscoverComponent } from "./discover/discover.component";
import { FavoriteSeriesComponent } from "./favorite-series/favorite-series.component";
import { SeriesActionComponent } from "./series-action/series-action.component";
import { SeriesActionsComponent } from "./series-actions/series-actions.component";
import { SeriesDetailComponent } from "./series-detail/series-detail.component";
import { SeriesSearchComponent } from "./series-search/series-search.component";
import { SeriesShowcaseComponent } from "./series-showcase/series-showcase.component";

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
  imports: [CommonModule, RouterModule, DragScrollModule, NgbModule],
  exports: [],
})
export class SeriesModule {}
