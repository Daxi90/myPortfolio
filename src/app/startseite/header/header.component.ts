import { Component, OnDestroy } from '@angular/core';
import { ToggleMenuService } from '../../toggle-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  menuOpen = false;
  subscription: Subscription;

  currentImage = '/assets/img/burgerClosed.png';

  menuImages = [
    '/assets/img/burgerClosed.png',
    '/assets/img/burgerClosed1.png',
    '/assets/img/burgerClosed2.png',
    '/assets/img/burgerClosed3.png',
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
