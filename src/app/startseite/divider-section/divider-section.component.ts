import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider-section',
  standalone: true,
  imports: [],
  templateUrl: './divider-section.component.html',
  styleUrls: ['./divider-section.component.scss']
})
export class DividerSectionComponent implements OnInit, OnDestroy {
  private images = [
    'assets/img/arrowanim0.png',
    'assets/img/arrowanim1.png',
    'assets/img/arrowanim2.png',
    'assets/img/arrowanim3.png',
    'assets/img/arrowanim4.png',
    'assets/img/arrowanim5.png',
    'assets/img/arrowanim6.png'
  ];
  currentImage = this.images[0];
  private currentIndex = 0;
  private animationInterval: number | undefined;

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    this.animationInterval = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 300); // Wechselt das Bild alle 100ms
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
}
