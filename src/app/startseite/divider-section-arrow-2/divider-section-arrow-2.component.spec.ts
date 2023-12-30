import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerSectionArrow2Component } from './divider-section-arrow-2.component';

describe('DividerSectionArrow2Component', () => {
  let component: DividerSectionArrow2Component;
  let fixture: ComponentFixture<DividerSectionArrow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerSectionArrow2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerSectionArrow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
