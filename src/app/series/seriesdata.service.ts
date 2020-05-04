import { Injectable } from "@angular/core";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo, QueryRef } from "apollo-angular";

@Injectable({
  providedIn: "root"
})
export class SeriesdataService {
  constructor(private _apollo: Apollo) {}

  search$(name: string): Observable<any> {
    const QUERY = gql`
      query {
        seriesQuery {
          search(name: "${name}") {
            id
            name
            imageUrl
          }
        }
      }
    `;
    return this._apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map((s) => s.data.seriesQuery.search));
  }

  schedule$(
    country: string,
    start: number,
    numberofdays: number
  ): Observable<any> {
    const QUERY = gql`
      query {
        seriesQuery {
          schedule(country: "${country}", start: ${start}, numberofdays: ${numberofdays}) {
            id
            name
            imageUrl
          }
        }
      }
    `;
    console.log(QUERY);
    return this._apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map((s) => s.data.seriesQuery.schedule));
  }

  today$(country: string): Observable<any> {
    const QUERY = gql`
      query {
        seriesQuery {
          today(country: "${country}") {
            id
            name
            imageUrl
          }
        }
      }
    `;
    return this._apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map((s) => s.data.seriesQuery.today));
  }
}
