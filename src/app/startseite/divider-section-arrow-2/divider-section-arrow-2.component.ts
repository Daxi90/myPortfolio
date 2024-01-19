import { Component } from '@angular/core';

@Component({
  selector: 'app-divider-section-arrow-2',
  standalone: true,
  imports: [],
  templateUrl: './divider-section-arrow-2.component.html',
  styleUrl: './divider-section-arrow-2.component.scss'
})
export class DividerSectionArrow2Component {

  
  defaultImage: string = './assets/img/arrowRight.png';
  hoverImage: string = './assets/img/arrowRight1.png';
  currentImage: string = this.defaultImage;

  changeImageOnHover(){
    this.currentImage = this.hoverImage;
  }

  resetImage(){
    this.currentImage = this.defaultImage;
  }

}
