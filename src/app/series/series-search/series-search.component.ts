import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchAll,
  tap,
} from "rxjs/operators";

import { Series } from "../series.model";
import { SeriesdataService } from "../seriesdata.service";

@Component({
  selector: "series-search",
  templateUrl: "./series-search.component.html",
  styleUrls: ["./series-search.component.scss"],
})
export class SeriesSearchComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<Series[]>();

  @ViewChild("searchBox", { static: true }) searchBox: ElementRef;

  constructor(private dataservice: SeriesdataService) {}

  ngOnInit() {
    fromEvent(this.searchBox.nativeElement, "keyup")
      .pipe(
        map((e: any) => e.target.value), // get value
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.loading.emit(true)), // enable loading
        map((query: string) => this.dataservice.search$(query)), // search, we have an observable of an observable now
        switchAll() // flatten the nested observables
      )
      .subscribe({
        next: (res: Series[]) => {
          this.loading.emit(false);
          this.results.emit(res);
        },
        error: (err: any) => {
          console.error(err);
          this.loading.emit(false);
        },
        complete: () => this.loading.emit(false),
      });
  }
}
