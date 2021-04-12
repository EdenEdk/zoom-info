import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-popup-content-container',
  templateUrl: './popup-content-container.component.html',
  styleUrls: ['./popup-content-container.component.css']
})
export class PopupContentContainerComponent {
  @Input() popupTemplate: any;
}

