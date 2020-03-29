import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

// I test this out with a search for now, as my backend doenst have "discover" yet
const QUERY = gql`
  query {
    series {
      search(name: "de mol") {
        id
        seriesName
        poster
      }
    }
  }
`;

@Component({
  selector: "discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"]
})
export class DiscoverComponent implements OnInit {
  public series$: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.series$ = this.apollo
      .watchQuery<any>({ query: QUERY })
      .valueChanges.pipe(map(s => s.data.series.search));
  }
}
