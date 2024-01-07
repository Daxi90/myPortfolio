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
