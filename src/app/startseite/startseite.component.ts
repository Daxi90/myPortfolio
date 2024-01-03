import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { DividerSectionComponent } from './divider-section/divider-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DividerSectionArrow1Component } from './divider-section-arrow-1/divider-section-arrow-1.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { DividerSectionArrow2Component } from './divider-section-arrow-2/divider-section-arrow-2.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioProject1Component } from './portfolio-project1/portfolio-project1.component';
import { PortfolioProject2Component } from './portfolio-project2/portfolio-project2.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    DividerSectionComponent,
    AboutMeComponent,
    DividerSectionArrow1Component,
    MySkillsComponent,
    DividerSectionArrow2Component,
    PortfolioHeaderComponent,
    PortfolioProject1Component,
    PortfolioProject2Component,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss',
})
export class StartseiteComponent {}
