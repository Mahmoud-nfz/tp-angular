import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSearchComponent } from './cv-search.component';

describe('CvSearchComponent', () => {
  let component: CvSearchComponent;
  let fixture: ComponentFixture<CvSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvSearchComponent]
    });
    fixture = TestBed.createComponent(CvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
