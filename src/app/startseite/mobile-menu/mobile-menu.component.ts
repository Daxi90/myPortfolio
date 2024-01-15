import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleMenuService } from '../../toggle-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnDestroy {
  menuOpen = false;
  subscription: Subscription;

  currentImage = '/assets/img/burgerOpen.png';

  menuImages = [
    '/assets/img/burgerOpen.png',
    '/assets/img/burgerOpen1.png',
    '/assets/img/burgerOpen2.png',
    '/assets/img/burgerOpen3.png',
  ];

  private imageIndex = 0;
  private animationInProgress = false;

  constructor(private toggleMenuService: ToggleMenuService) {
    this.subscription = this.toggleMenuService.currentToggle.subscribe(toggle => {
      this.menuOpen = toggle;
    });
  }

  toggleMenuFunc() {
    this.toggleMenuService.changeToggle(!this.menuOpen); // Toggelt den Zustand

    if (!this.animationInProgress) {
      this.animateMenu();
    }
  }

  private animateMenu() {
    this.animationInProgress = true;
    this.imageIndex = 0; // Starte die Animation vom ersten Bild
  
    const animationInterval = setInterval(() => {
      this.currentImage = this.menuImages[this.imageIndex];
      this.imageIndex++;
  
      if (this.imageIndex >= this.menuImages.length) {
        clearInterval(animationInterval);
  
        // Warte eine halbe Sekunde, bevor das erste Bild wieder geladen wird
        setTimeout(() => {
          this.currentImage = this.menuImages[0]; // Setzt das Bild zurück auf das erste Bild
          this.animationInProgress = false;
          this.imageIndex = 0; // Setzt den Index zurück
        }, 500); // 500ms Pause
      }
    }, 100); // 100ms für jedes Bild
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
