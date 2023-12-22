import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [AboveTheFoldComponent],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.scss'
})
export class StartseiteComponent {

}
