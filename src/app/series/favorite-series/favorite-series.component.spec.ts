import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FavoriteSeriesComponent } from "./favorite-series.component";

describe("FavoriteSeriesComponent", () => {
  let component: FavoriteSeriesComponent;
  let fixture: ComponentFixture<FavoriteSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteSeriesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
