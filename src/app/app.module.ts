import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { SeriesModule } from "./series/series.module";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsersModule } from "./users/users.module";
import { httpInterceptorProviders } from "./interceptors";
import { ProfileComponent } from "./profile/profile.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, ProfileComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    SeriesModule,
    NgbModule,
    UsersModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
