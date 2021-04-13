import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PopupComponent {
  visible: boolean;

  togglePopup(visible: boolean): void {
    this.visible = visible;
  }
}

