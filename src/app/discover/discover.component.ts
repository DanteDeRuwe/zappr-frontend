import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
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
export class DiscoverComponent implements OnInit, OnDestroy {
  loading: boolean;
  series: any[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: QUERY
      })
      .valueChanges.subscribe(({ data }) => {
        this.series = data.series.search;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
