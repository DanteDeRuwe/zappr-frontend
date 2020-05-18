import { Injectable } from "@angular/core";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo, QueryRef } from "apollo-angular";
import { Series } from "../series/series.model";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UsersdataService {
  constructor(private _apollo: Apollo) {}

  getBasicInfo$(id: number): Observable<User> {
    const QUERY = gql`
    query{
      userQuery{
        get(id: ${id}){
          email, fullName, id,
          watchListedSeries {id},
          favoriteSeries {id}
        }
      }
    }
    `;
    return this._apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map((s) => s.data.userQuery.get));
  }

  addSeriesToWatchList(series: Series, user: User): Observable<User> {
    const MUTATION = gql`
      mutation addSeriesToWatchList($userid: Int!, $seriesid: Int!) {
        userMutation {
          addSeriesToWatchList(userId: $userid, seriesId: $seriesid) {
            id
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          userid: user.id,
          seriesid: series.id,
        },
      })
      .pipe(map((s) => s.data.userMutation.addSeriesToWatchList));
  }

  addSeriesToFavorites(series: Series, user: User): Observable<User> {
    const MUTATION = gql`
      mutation addFavoriteSeries($userid: Int!, $seriesid: Int!) {
        userMutation {
          addFavoriteSeries(userId: $userid, seriesId: $seriesid) {
            id
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          userid: user.id,
          seriesid: series.id,
        },
      })
      .pipe(map((s) => s.data.userMutation.addFavoriteSeries));
  }
}
