import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  private toggleSource = new BehaviorSubject<boolean>(false);
  currentToggle = this.toggleSource.asObservable();

  constructor() { }

  changeToggle(toggle: boolean) {

    setTimeout(() => {
      this.toggleSource.next(toggle);
    }, 200);
   
  }

}
