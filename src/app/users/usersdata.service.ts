import { Injectable } from "@angular/core";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo, QueryRef } from "apollo-angular";
import { Series } from "../series/series.model";

@Injectable({
  providedIn: "root",
})
export class UsersdataService {
  constructor() {}

  addSeriesToWatchList(series: Series) {
    console.log(`You tried adding ${series.name} to watchlist`);
  }

  addSeriesToFavorites(series: Series) {
    console.log(`You tried adding ${series.name} to favorites`);
  }
}
