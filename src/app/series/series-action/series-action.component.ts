import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "series-action",
  templateUrl: "./series-action.component.html",
  styleUrls: ["./series-action.component.scss"],
})
export class SeriesActionComponent implements OnInit {
  @Input() condition: boolean;
  @Output() onClickWhileTrue: EventEmitter<any> = new EventEmitter();
  @Output() onClickWhileFalse: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
