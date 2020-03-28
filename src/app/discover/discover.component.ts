import { Component, OnInit } from "@angular/core";

@Component({
  selector: "discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"]
})
export class DiscoverComponent implements OnInit {
  public posters: string[];

  constructor() {}

  ngOnInit(): void {
    this.posters = [
      "https://artworks.thetvdb.com/banners/posters/85452-2.jpg",
      "https://artworks.thetvdb.com/banners/posters/5d4d356643957.jpg",
      "https://artworks.thetvdb.com/banners/series/373489/posters/62024527.jpg",
      "https://artworks.thetvdb.com/banners/posters/85452-2.jpg",
      "https://artworks.thetvdb.com/banners/posters/5d4d356643957.jpg",
      "https://artworks.thetvdb.com/banners/series/373489/posters/62024527.jpg"
    ];
  }
}
