import { Component } from '@angular/core';

@Component({
  selector: 'app-divider-section-arrow-1',
  standalone: true,
  imports: [],
  templateUrl: './divider-section-arrow-1.component.html',
  styleUrl: './divider-section-arrow-1.component.scss'
})
export class DividerSectionArrow1Component {

  defaultImage: string = './assets/img/arrowLeft.png';
  hoverImage: string = './assets/img/arrowLeft1.png';
  currentImage: string = this.defaultImage;

  changeImageOnHover(){
    this.currentImage = this.hoverImage;
  }

  resetImage(){
    this.currentImage = this.defaultImage;
  }

}
