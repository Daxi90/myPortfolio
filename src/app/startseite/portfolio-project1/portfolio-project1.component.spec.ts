import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProject1Component } from './portfolio-project1.component';

describe('PortfolioProject1Component', () => {
  let component: PortfolioProject1Component;
  let fixture: ComponentFixture<PortfolioProject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProject1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
