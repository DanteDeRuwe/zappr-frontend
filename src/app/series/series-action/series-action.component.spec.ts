import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesActionComponent } from './series-action.component';

describe('SeriesActionComponent', () => {
  let component: SeriesActionComponent;
  let fixture: ComponentFixture<SeriesActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
