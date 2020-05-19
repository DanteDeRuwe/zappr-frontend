import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { DocumentNode } from "graphql";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UsersdataService {
  private _getUserQuery: DocumentNode;

  constructor(private _apollo: Apollo) {}

  get$(id: number): Observable<User> {
    this._getUserQuery = gql`
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
      .watchQuery<any>({ query: this._getUserQuery })
      .valueChanges.pipe(map((s) => s.data.userQuery.get));
  }

  addSeriesToWatchList(seriesid: number, userid: number): Observable<User> {
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
          userid,
          seriesid,
        },
        refetchQueries: [{ query: this._getUserQuery }],
      })
      .pipe(map((s) => s.data.userMutation.addSeriesToWatchList));
  }

  addSeriesToFavorites(seriesid: number, userid: number): Observable<User> {
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
          userid: userid,
          seriesid: seriesid,
        },
        refetchQueries: [{ query: this._getUserQuery }],
      })
      .pipe(map((s) => s.data.userMutation.addFavoriteSeries));
  }
}
