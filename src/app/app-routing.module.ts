import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiscoverComponent } from "./series/discover/discover.component";
import { SeriesDetailComponent } from "./series/series-detail/series-detail.component";
import { FavoriteSeriesComponent } from "./series/favorite-series/favorite-series.component";
import { LoginComponent } from "./users/login/login.component";
import { AuthGuard } from "./users/auth.guard";
import { WatchlistComponent } from "./series/watchlist/watchlist.component";
import { RegisterComponent } from "./users/register/register.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "discover", component: DiscoverComponent },
  {
    path: "favorites",
    canActivate: [AuthGuard],
    component: FavoriteSeriesComponent,
  },
  {
    path: "watchlist",
    canActivate: [AuthGuard],
    component: WatchlistComponent,
  },
  { path: "series/:id", component: SeriesDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "discover", pathMatch: "full" },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
