import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { DividerSectionComponent } from './divider-section/divider-section.component';

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [AboveTheFoldComponent, DividerSectionComponent],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {

}
