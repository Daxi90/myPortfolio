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

  constructor(private toggleMenuService: ToggleMenuService) {
    this.subscription = this.toggleMenuService.currentToggle.subscribe(toggle => {
      this.menuOpen = toggle;
    });
  }

  toggleMenuFunc() {
    this.toggleMenuService.changeToggle(!this.menuOpen); // Toggelt den Zustand
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
