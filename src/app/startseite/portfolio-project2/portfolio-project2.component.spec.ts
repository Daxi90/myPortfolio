import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProject2Component } from './portfolio-project2.component';

describe('PortfolioProject2Component', () => {
  let component: PortfolioProject2Component;
  let fixture: ComponentFixture<PortfolioProject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProject2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
