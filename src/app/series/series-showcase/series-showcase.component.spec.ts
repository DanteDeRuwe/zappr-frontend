import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SeriesShowcaseComponent } from "./series-showcase.component";

describe("SeriesShowcaseComponent", () => {
  let component: SeriesShowcaseComponent;
  let fixture: ComponentFixture<SeriesShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesShowcaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
