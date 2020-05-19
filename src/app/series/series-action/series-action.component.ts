import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "series-action",
  templateUrl: "./series-action.component.html",
  styleUrls: ["./series-action.component.scss"],
})
export class SeriesActionComponent {
  @Input() condition: boolean;
  @Input() class: string[] = ["", ""];
  @Output() onClickWhileTrue: EventEmitter<any> = new EventEmitter();
  @Output() onClickWhileFalse: EventEmitter<any> = new EventEmitter();
}
