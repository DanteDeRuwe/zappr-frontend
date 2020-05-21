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

  me$(): Observable<User> {
    const QUERY = gql`
      query {
        userQuery {
          me {
            email
            fullName
            id
            watchListedSeries {
              id
            }
            favoriteSeries {
              id
            }
          }
        }
      }
    `;
    return this._apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map((s) => s.data.userQuery.me));
  }

  getFavorites$(): Observable<Series[]> {
    const QUERY = gql`
      query {
        userQuery {
          me {
            email
            fullName
            id
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
      .valueChanges.pipe(map((s) => s.data.userQuery.me.favoriteSeries));
  }

  addSeriesToWatchList$(seriesid: number): Observable<User> {
    const MUTATION = gql`
      mutation addSeriesToWatchList($seriesid: Int!) {
        userMutation {
          addSeriesToWatchList(seriesId: $seriesid) {
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
          seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.addSeriesToWatchList));
  }

  addFavoriteSeries$(seriesid: number): Observable<User> {
    const MUTATION = gql`
      mutation addFavoriteSeries($seriesid: Int!) {
        userMutation {
          addFavoriteSeries(seriesId: $seriesid) {
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
          seriesid: seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.addFavoriteSeries));
  }

  removeSeriesFromWatchList$(seriesid: number): Observable<User> {
    const MUTATION = gql`
      mutation removeSeriesFromWatchList($seriesid: Int!) {
        userMutation {
          removeSeriesFromWatchList(seriesId: $seriesid) {
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
          seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.removeSeriesFromWatchList));
  }

  removeFavoriteSeries$(seriesid: number): Observable<User> {
    const MUTATION = gql`
      mutation removeFavoriteSeries($seriesid: Int!) {
        userMutation {
          removeFavoriteSeries(seriesId: $seriesid) {
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
          seriesid: seriesid,
        },
      })
      .pipe(map((s) => s.data.userMutation.removeFavoriteSeries));
  }
}
