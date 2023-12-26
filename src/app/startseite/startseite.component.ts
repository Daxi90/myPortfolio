import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { DividerSectionComponent } from './divider-section/divider-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DividerSectionArrow1Component } from './divider-section-arrow-1/divider-section-arrow-1.component';

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [AboveTheFoldComponent, DividerSectionComponent, AboutMeComponent, DividerSectionArrow1Component],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {

}
