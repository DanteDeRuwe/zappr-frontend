import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SeriesActionsComponent } from "./series-actions.component";

describe("SeriesActionsComponent", () => {
  let component: SeriesActionsComponent;
  let fixture: ComponentFixture<SeriesActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesActionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
