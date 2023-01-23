import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationResultsComponent } from './pagination-results.component';

describe('PaginationResultsComponent', () => {
  let component: PaginationResultsComponent;
  let fixture: ComponentFixture<PaginationResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
