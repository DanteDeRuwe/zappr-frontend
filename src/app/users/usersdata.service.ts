import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { DocumentNode } from "graphql";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "./user.model";
import { Series } from "../series/series.model";

@Injectable({
  providedIn: "root",
})
export class UsersdataService {
  constructor(private _apollo: Apollo) {}

  get$(id: number): Observable<User> {
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

  getFavorites$(id: number): Observable<Series[]> {
    const QUERY = gql`
    query{
      userQuery{
        get(id: ${id}){
          email, fullName, id,
          favoriteSeries {
            id
            name
            imageUrl
          }
        }
      }
    }
    `;
    return this._apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map((s) => s.data.userQuery.get.favoriteSeries));
  }

  addSeriesToWatchList(seriesid: number, userid: number): Observable<User> {
    const MUTATION = gql`
      mutation addSeriesToWatchList($userid: Int!, $seriesid: Int!) {
        userMutation {
          addSeriesToWatchList(userId: $userid, seriesId: $seriesid) {
            id
            watchListedSeries {
              id
            }
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          userid,
          seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.addSeriesToWatchList));
  }

  addFavoriteSeries(seriesid: number, userid: number): Observable<User> {
    const MUTATION = gql`
      mutation addFavoriteSeries($userid: Int!, $seriesid: Int!) {
        userMutation {
          addFavoriteSeries(userId: $userid, seriesId: $seriesid) {
            id
            favoriteSeries {
              id
            }
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          userid: userid,
          seriesid: seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.addFavoriteSeries));
  }

  removeSeriesFromWatchList(
    seriesid: number,
    userid: number
  ): Observable<User> {
    const MUTATION = gql`
      mutation removeSeriesFromWatchList($userid: Int!, $seriesid: Int!) {
        userMutation {
          removeSeriesFromWatchList(userId: $userid, seriesId: $seriesid) {
            id
            watchListedSeries {
              id
            }
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          userid,
          seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.removeSeriesFromWatchList));
  }

  removeFavoriteSeries(seriesid: number, userid: number): Observable<User> {
    const MUTATION = gql`
      mutation removeFavoriteSeries($userid: Int!, $seriesid: Int!) {
        userMutation {
          removeFavoriteSeries(userId: $userid, seriesId: $seriesid) {
            id
            favoriteSeries {
              id
            }
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          userid: userid,
          seriesid: seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.removeFavoriteSeries));
  }
}
