import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiscoverComponent } from "./series/discover/discover.component";
import { SeriesDetailComponent } from "./series/series-detail/series-detail.component";

const routes: Routes = [
  { path: "discover", component: DiscoverComponent },
  { path: "series/:id", component: SeriesDetailComponent },
  { path: "", redirectTo: "discover", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
