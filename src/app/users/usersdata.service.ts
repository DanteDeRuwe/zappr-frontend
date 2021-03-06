import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Series } from "../series/series.model";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UsersdataService {
  private _authenticated$: BehaviorSubject<boolean>;
  redirectUrl: string = "";

  constructor(private _apollo: Apollo, private _router: Router) {
    let { parsedToken, expires } = this.parseJwt(localStorage.getItem("token"));

    if (expires) {
      localStorage.removeItem("token");
      parsedToken = null;
    }

    this._authenticated$ = new BehaviorSubject<boolean>(!!parsedToken);
  }

  authenticate(token: string) {
    this._authenticated$.next(!!token);
    if (token) localStorage.setItem("token", token);

    this._router.navigate([this.redirectUrl]);
    this.redirectUrl = "";
  }

  logout() {
    if (this._authenticated$.getValue()) {
      localStorage.removeItem("token");
      this._authenticated$.next(false);
    }
  }

  redirectToLogin(sourceUrl: string) {
    this.redirectUrl = sourceUrl;
    this._router.navigate(["login"]);
  }

  /*
   * GraphQL
   */

  register$(
    email: string,
    password: string,
    fullName: string
  ): Observable<any> {
    const MUTATION = gql`
      mutation register($user: UserInput!) {
        userMutation {
          register(user: $user) {
            id
            fullName
            email
          }
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          user: {
            email,
            password,
            fullName,
          },
        },
      })
      .pipe(map((s) => s.data.userMutation.register));
  }

  login$(email: string, password: string): Observable<string> {
    const MUTATION = gql`
      mutation login($email: String!, $password: String!) {
        userMutation {
          login(email: $email, password: $password)
        }
      }
    `;
    return this._apollo
      .mutate<any>({
        mutation: MUTATION,
        variables: {
          email,
          password,
        },
      })
      .pipe(map((s) => s.data.userMutation.login));
  }

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
      .watchQuery<any>({
        query: QUERY,
        fetchPolicy: "network-only", //This is important, when switching users, we dont want it to use cached data!
      })
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

  getWatchlist$(): Observable<Series[]> {
    const QUERY = gql`
      query {
        userQuery {
          me {
            email
            fullName
            id
            watchListedSeries {
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
      .valueChanges.pipe(map((s) => s.data.userQuery.me.watchListedSeries));
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

  /*
   * Getters
   */

  get token(): string {
    const t = localStorage.getItem("token");
    return !!t ? t : "";
  }

  get authenticated() {
    return this._authenticated$.getValue();
  }

  /*
   * Getters
   */

  private parseJwt(token: string) {
    if (!token) return { parsedToken: null, expires: null };
    const base64Token = token.split(".")[1];
    const base64 = base64Token.replace(/-/g, "+").replace(/_/g, "/");
    const parsedToken = JSON.parse(window.atob(base64));
    const expires = !!parsedToken
      ? new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date()
      : null;
    return { parsedToken, expires };
  }
}
