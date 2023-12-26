import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerSectionArrow1Component } from './divider-section-arrow-1.component';

describe('DividerSectionArrow1Component', () => {
  let component: DividerSectionArrow1Component;
  let fixture: ComponentFixture<DividerSectionArrow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerSectionArrow1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerSectionArrow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
